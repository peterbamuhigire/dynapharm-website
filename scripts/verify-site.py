import collections
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
from xml.etree import ElementTree


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
ORIGIN = 'https://dynapharmafrica.com'


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.route = '/' + path.relative_to(DIST).as_posix().removesuffix('index.html')
        self.meta = {}
        self.links = []
        self.resources = []
        self.ids = []
        self.headings = []
        self.images = []
        self.schemas = []
        self.title = ''
        self.language = ''
        self.capture = None
        self.buffer = ''
        self.feed(path.read_text(encoding='utf-8'))

    def handle_starttag(self, tag, attributes):
        attributes = dict(attributes)
        if attributes.get('id'):
            self.ids.append(attributes['id'])
        if tag == 'html':
            self.language = attributes.get('lang')
        if tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            self.headings.append(int(tag[1]))
        if tag == 'meta':
            self.meta[attributes.get('name', attributes.get('property'))] = attributes.get('content', '')
        if tag in ['a', 'link']:
            self.links.append(attributes)
        if tag in ['img', 'script', 'source'] and attributes.get('src'):
            self.resources.append(attributes['src'])
        if tag == 'link' and attributes.get('rel') in ['stylesheet', 'icon', 'preload']:
            self.resources.append(attributes.get('href', ''))
        if tag == 'img':
            self.images.append(attributes)
            self.resources.extend(item.strip().split(' ')[0] for item in attributes.get('srcset', '').split(',') if item.strip())
        if tag == 'title' or (tag == 'script' and attributes.get('type') == 'application/ld+json'):
            self.capture = tag
            self.buffer = ''

    def handle_data(self, data):
        if self.capture:
            self.buffer += data

    def handle_endtag(self, tag):
        if self.capture == tag:
            if tag == 'title':
                self.title = self.buffer
            else:
                self.schemas.append(json.loads(self.buffer))
            self.capture = None


def local_path(url, route):
    parsed = urlsplit(urljoin(ORIGIN + route, url))
    if parsed.scheme not in ['http', 'https'] or parsed.netloc != urlsplit(ORIGIN).netloc:
        return None
    path = DIST / unquote(parsed.path).lstrip('/')
    if not path.suffix:
        path = path / 'index.html'
    return path


def schema_resources(value):
    if isinstance(value, dict):
        if value.get('@type') == 'ImageObject' and isinstance(value.get('url'), str):
            yield value['url']
        for key, child in value.items():
            if key in ['image', 'logo', 'contentUrl'] and isinstance(child, str):
                yield child
            yield from schema_resources(child)
    elif isinstance(value, list):
        for child in value:
            yield from schema_resources(child)


def main():
    errors = []
    warnings = []
    pages = [Page(path) for path in sorted(DIST.rglob('*.html'))]
    by_path = {page.path: page for page in pages}
    summaries = []
    if not pages:
        raise SystemExit('No built HTML. Run npm run build first.')
    for page in pages:
        def check(condition, message):
            if not condition:
                errors.append({'route': page.route, 'check': message})
        if page.route == '/':
            check('noindex' in page.meta.get('robots', ''), 'redirect should not be indexed')
            continue
        check(page.language == page.route.split('/')[1], 'correct document language')
        check(page.headings.count(1) == 1, 'exactly one H1')
        check(bool(page.title.strip()), 'nonempty title')
        check(bool(page.meta.get('description')), 'nonempty description')
        check('noindex' not in page.meta.get('robots', ''), 'indexable language page')
        canonicals = [link.get('href') for link in page.links if link.get('rel') == 'canonical']
        check(canonicals == [ORIGIN + page.route], 'single self-referencing canonical with trailing slash')
        alternate_links = [link for link in page.links if link.get('rel') == 'alternate' and link.get('hreflang')]
        check({link['hreflang'] for link in alternate_links} == {'en', 'fr', 'x-default'}, 'complete language cluster')
        for link in alternate_links:
            target = local_path(link['href'], page.route)
            check(target in by_path, 'alternate target exists: ' + link['href'])
            if target in by_path:
                check(any(item.get('href') == ORIGIN + page.route and item.get('hreflang') == page.language for item in by_path[target].links), 'reciprocal hreflang')
        check(page.meta.get('og:url') == ORIGIN + page.route, 'social URL matches canonical')
        check(bool(page.meta.get('og:image:alt')), 'OG image alt')
        check(bool(page.meta.get('twitter:image:alt')), 'Twitter image alt')
        check(bool(page.meta.get('og:image')), 'OG image present')
        resources = page.resources + [page.meta.get('og:image', ''), page.meta.get('twitter:image', '')]
        for schema in page.schemas:
            resources.extend(schema_resources(schema))
        for resource in set(resources):
            target = local_path(resource, page.route)
            check(target is None or target.is_file(), 'asset exists: ' + resource)
        for link in page.links:
            href = link.get('href', '')
            if not href:
                continue
            target = local_path(href, page.route)
            check(target is None or target.is_file(), 'internal link exists: ' + href)
            fragment = urlsplit(href).fragment
            if fragment and target in by_path:
                check(unquote(fragment) in by_path[target].ids, 'anchor exists: ' + href)
            if link.get('target') == '_blank':
                check('noopener' in link.get('rel', '').split(), 'new-tab link has noopener')
        check(all('alt' in image for image in page.images), 'all images have alt attributes')
        check(all(image.get('width') and image.get('height') for image in page.images), 'image dimensions set')
        check(len(page.ids) == len(set(page.ids)), 'unique HTML IDs')
        types = [schema.get('@type') for schema in page.schemas]
        check(types.count('BreadcrumbList') <= 1, 'no duplicate breadcrumb schemas')
        if len(page.meta.get('description', '')) > 180:
            warnings.append({'route': page.route, 'check': 'description exceeds editorial 180-character threshold'})
        summaries.append({'route': page.route, 'title': page.title, 'descriptionLength': len(page.meta.get('description', '')), 'schemaTypes': types})
    sitemap_urls = set()
    sitemap_alternates = {}
    for path in DIST.glob('sitemap-*.xml'):
        tree = ElementTree.parse(path)
        for item in tree.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
            location = item.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text
            sitemap_urls.add(location)
            sitemap_alternates[location] = {link.attrib['hreflang']: link.attrib['href'] for link in item.findall('{http://www.w3.org/1999/xhtml}link')}
    expected = {ORIGIN + page.route for page in pages if page.route != '/'}
    if sitemap_urls != expected:
        errors.append({'route': 'sitemap', 'check': 'sitemap must contain all and only canonical language pages', 'missing': sorted(expected - sitemap_urls), 'extra': sorted(sitemap_urls - expected)})
    for page in pages:
        if page.route == '/':
            continue
        html_alternates = {link['hreflang']: link['href'] for link in page.links if link.get('rel') == 'alternate' and link.get('hreflang')}
        if sitemap_alternates.get(ORIGIN + page.route) != html_alternates:
            errors.append({'route': page.route, 'check': 'sitemap and HTML language alternates agree'})
    for language in ['en', 'fr']:
        titles = collections.Counter(page.title for page in pages if page.language == language and page.route != '/')
        if any(count > 1 for count in titles.values()):
            errors.append({'route': language, 'check': 'titles unique within language'})
    discovery_files = [DIST / 'llms.txt']
    for language in ['en', 'fr']:
        markdown_path = DIST / language / 'country-profiles' / 'senegal' / 'index.md'
        discovery_files.append(markdown_path)
        if markdown_path.is_file():
            markdown = markdown_path.read_text(encoding='utf-8')
            source = (ROOT / 'docs' / language / 'country-senegal.md').read_text(encoding='utf-8')
            content = json.loads(source.split('---', 2)[1])
            required_text = [content[key] for key in ['heading', 'intro', 'overviewBody', 'pendingValue', 'productsIntro', 'contactIntro', 'email', 'sourceWarning', 'sourceNote']]
            required_text.extend(faq['answer'] for faq in content['faqs'])
            if any(text not in markdown for text in required_text):
                errors.append({'route': str(markdown_path.relative_to(DIST)), 'check': 'Markdown preserves visible source facts, answers and warnings'})
        country_page = by_path[DIST / language / 'country-profiles' / 'senegal' / 'index.html']
        source_links = [link for link in country_page.links if link.get('href') == 'https://dynapharmsenegal.com/']
        if len(source_links) != 1 or source_links[0].get('target') != '_blank' or not {'noopener', 'noreferrer', 'nofollow'}.issubset(set(source_links[0].get('rel', '').split())):
            errors.append({'route': country_page.route, 'check': 'Senegal attribution opens safely in a new tab with no endorsement'})
    for discovery_file in discovery_files:
        if not discovery_file.is_file():
            errors.append({'route': str(discovery_file.relative_to(DIST)), 'check': 'AI discovery file exists'})
            continue
        content = discovery_file.read_text(encoding='utf-8')
        if not content.startswith('# ') or 'undefined' in content:
            errors.append({'route': str(discovery_file.relative_to(DIST)), 'check': 'AI discovery content is valid and populated'})
        for url in re.findall(r'\]\((https?://[^)]+)\)', content):
            target = local_path(url, '/')
            if target is not None and not target.is_file():
                errors.append({'route': str(discovery_file.relative_to(DIST)), 'check': 'AI discovery target exists: ' + url})
    result = {'htmlPages': len(pages), 'languagePages': len(summaries), 'sitemapPages': len(sitemap_urls), 'errors': errors, 'warnings': warnings, 'pages': summaries}
    report = ROOT / 'docs' / 'kaizen-validation-2026-09-09.json'
    report.write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({key: value for key, value in result.items() if key != 'pages'}, ensure_ascii=False, indent=2))
    raise SystemExit(1 if errors else 0)


if __name__ == '__main__':
    main()
