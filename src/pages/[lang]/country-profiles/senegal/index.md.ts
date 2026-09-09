import type { APIRoute, GetStaticPaths } from 'astro';
import { SUPPORTED_LANGS } from '@utils/i18n';
import { frontmatter as english } from '../../../../../docs/en/country-senegal.md';
import { frontmatter as french } from '../../../../../docs/fr/country-senegal.md';

export const getStaticPaths: GetStaticPaths = () => SUPPORTED_LANGS.map((lang) => ({ params: { lang } }));

export const GET: APIRoute = ({ params, site }) => {
  const content = params.lang === 'fr' ? french : english;
  const origin = site || new URL('https://dynapharmafrica.com/');
  const canonical = new URL('/' + params.lang + '/country-profiles/senegal/', origin);
  const lines = [
    '# ' + content.heading, '', '> ' + content.intro, '',
    '[' + content.title + '](' + canonical + ')', '',
    '## ' + content.overviewHeading, '', content.overviewBody, '',
    '- **' + content.verifiedLabel + '**: ' + content.verifiedValue,
    '- **' + content.pendingLabel + '**: ' + content.pendingValue, '',
    '## ' + content.productsHeading, '', content.productsIntro, '',
  ];
  for (const category of content.categories) {
    lines.push('### ' + category.title, '', category.body, '',
      '[' + content.catalogueCta + '](' + new URL('/' + params.lang + '/' + category.href + '/', origin) + ')', '');
  }
  lines.push('## ' + content.contactHeading, '', content.contactIntro, '',
    content.emailLabel + ': ' + content.email, '',
    '[' + content.contactCta + '](' + new URL('/' + params.lang + '/contact/', origin) + ')', '',
    '[' + content.businessCta + '](' + new URL('/' + params.lang + '/business-opportunity/', origin) + ')', '');
  for (const step of content.steps) lines.push('### ' + step.title, '', step.body, '');
  lines.push('## ' + content.faqHeading, '');
  for (const faq of content.faqs) lines.push('### ' + faq.question, '', faq.answer, '');
  lines.push('## ' + content.sourcesHeading, '', content.reviewedLabel, '', content.sourceNote, '',
    '[' + content.corporateSource + '](' + content.corporateUrl + ')', '', content.sourceWarning, '',
    '[' + content.originalSource + '](' + content.originalUrl + ')', '');
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
