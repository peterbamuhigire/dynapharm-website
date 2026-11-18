import type { APIRoute } from 'astro';
import { frontmatter as english } from '../../docs/en/ai-discovery.md';
import { frontmatter as french } from '../../docs/fr/ai-discovery.md';
import { frontmatter as englishSearch } from '../../docs/en/search-metadata.md';
import { frontmatter as frenchSearch } from '../../docs/fr/search-metadata.md';
import { frontmatter as englishSenegal } from '../../docs/en/country-senegal.md';
import { frontmatter as frenchSenegal } from '../../docs/fr/country-senegal.md';

export const GET: APIRoute = ({ site }) => {
  const origin = site || new URL('https://dynapharmafrica.com/');
  const sections = [
    { lang: 'fr', content: french, search: frenchSearch, senegal: frenchSenegal },
    { lang: 'en', content: english, search: englishSearch, senegal: englishSenegal },
  ];
  const lines = [
    '# ' + english.title, '',
    '> ' + french.summary + ' ' + english.summary, '',
    'Generated: ' + new Date().toISOString().slice(0, 10),
    'Canonical site: ' + new URL('/', origin).href, '',
    french.scope, '', english.scope, '',
    french.senegalNote, '', english.senegalNote,
  ];
  for (const { lang, content, search, senegal } of sections) {
    lines.push('', '## ' + content.section, '');
    const markdownUrl = new URL('/' + lang + '/country-profiles/senegal/index.md', origin);
    lines.push('- [' + content.senegalMarkdown + '](' + markdownUrl + '): ' + senegal.description);
    for (const page of content.pages) {
      const path = '/' + lang + '/' + (page.route ? page.route + '/' : '');
      const description = page.route === 'country-profiles/senegal' ? senegal.description : search.pages[page.route]?.description;
      if (!description) throw new Error('llms.txt: no search description for ' + lang + ' route ' + page.route);
      lines.push('- [' + page.label + '](' + new URL(path, origin) + '): ' + description);
    }
  }
  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
