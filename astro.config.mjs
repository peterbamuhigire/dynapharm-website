import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://dynapharmafrica.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
        },
      },
      // Pair localized blog slugs across languages so the sitemap
      // emits correct hreflang alternates for posts whose slug
      // differs per language.
      serialize(item) {
        const blogSlugMap = {
          'en/blog/ginkgo-biloba-benefits': 'fr/blog/bienfaits-du-ginkgo-biloba',
          'fr/blog/bienfaits-du-ginkgo-biloba': 'en/blog/ginkgo-biloba-benefits',
          'en/blog/ginseng-benefits': 'fr/blog/bienfaits-du-ginseng',
          'fr/blog/bienfaits-du-ginseng': 'en/blog/ginseng-benefits',
          'en/blog/ganoderma-benefits': 'fr/blog/bienfaits-du-ganoderma',
          'fr/blog/bienfaits-du-ganoderma': 'en/blog/ganoderma-benefits',
          'en/blog/green-tea-benefits': 'fr/blog/bienfaits-du-the-vert',
          'fr/blog/bienfaits-du-the-vert': 'en/blog/green-tea-benefits',
        };
        const url = new URL(item.url);
        const path = url.pathname.replace(/^\/+|\/+$/g, '');
        const counterpart = blogSlugMap[path];
        if (counterpart) {
          const lang = path.startsWith('en/') ? 'en' : 'fr';
          const otherLang = lang === 'en' ? 'fr' : 'en';
          item.links = [
            { lang, url: `${url.origin}/${path}/` },
            { lang: otherLang, url: `${url.origin}/${counterpart}/` },
            { lang: 'x-default', url: `${url.origin}/${path.startsWith('en/') ? path : counterpart}/` },
          ];
        }
        return item;
      },
    }),
    alpinejs(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  build: {
    assets: '_assets',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
});
