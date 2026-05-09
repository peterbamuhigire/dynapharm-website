import type { Lang } from '@utils/i18n';

export interface BlogPostSummary {
  /** Stable id used to look up this post across languages. */
  id: string;
  /** Localized URL slug (no language prefix). */
  slug: Record<Lang, string>;
  /** Card / meta title (≤60 chars where possible). */
  title: Record<Lang, string>;
  /** Card / meta description (≤160 chars). */
  description: Record<Lang, string>;
  /** Hero image — relative path under photo-bank category. */
  heroImage: string;
  /** Hero image alt. */
  heroAlt: Record<Lang, string>;
  /** ISO publish date. */
  datePublished: string;
  /** Reading time in minutes. */
  readingTime: number;
  /** Category badge label. */
  category: Record<Lang, string>;
  /** Comma-separated keyword string for meta. */
  keywords: Record<Lang, string>;
}

/** All published blog posts. Ordered newest-first for the listing page. */
export const POSTS: BlogPostSummary[] = [
  {
    id: 'ginkgo-biloba-benefits',
    slug: {
      en: 'ginkgo-biloba-benefits',
      fr: 'bienfaits-du-ginkgo-biloba',
    },
    title: {
      en: 'Ginkgo Biloba: Health Benefits, Uses & Safety Guide',
      fr: 'Ginkgo Biloba : bienfaits, utilisations et guide de sécurité',
    },
    description: {
      en: 'Discover the science-backed health benefits of Ginkgo Biloba — memory, circulation, cognitive support — and how to use it safely. Backed by traditional Chinese medicine and modern research.',
      fr: 'Découvrez les bienfaits du Ginkgo Biloba soutenus par la science — mémoire, circulation, soutien cognitif — et comment l\'utiliser en toute sécurité. Hérité de la médecine traditionnelle chinoise et confirmé par la recherche moderne.',
    },
    heroImage: 'HERBS-GINKGO-03.jpg',
    heroAlt: {
      en: 'Fresh Ginkgo biloba leaves on a wooden surface — a traditional herbal remedy used for memory and circulation support',
      fr: 'Feuilles fraîches de Ginkgo biloba sur une surface en bois — un remède traditionnel à base de plantes utilisé pour soutenir la mémoire et la circulation',
    },
    datePublished: '2026-05-09',
    readingTime: 12,
    category: {
      en: 'Herbal Wellness',
      fr: 'Bien-être à base de plantes',
    },
    keywords: {
      en: 'ginkgo biloba benefits, ginkgo biloba uses, ginkgo for memory, ginkgo circulation, ginkgo side effects, ginkgo dosage, Yeeginkgo, Ginali, Ginkgo Ginseng Coffee, traditional Chinese medicine, herbal cognitive support, natural memory supplement',
      fr: 'bienfaits ginkgo biloba, utilisations ginkgo, ginkgo mémoire, ginkgo circulation, effets secondaires ginkgo, posologie ginkgo, Yeeginkgo, Ginali, Café Ginkgo Ginseng, médecine traditionnelle chinoise, soutien cognitif naturel, complément mémoire naturel',
    },
  },
  {
    id: 'ginseng-benefits',
    slug: {
      en: 'ginseng-benefits',
      fr: 'bienfaits-du-ginseng',
    },
    title: {
      en: 'Ginseng: Health Benefits, Types & How To Use It Safely',
      fr: 'Ginseng : bienfaits, variétés et utilisation en toute sécurité',
    },
    description: {
      en: 'Explore the proven and traditional benefits of Panax ginseng — energy, immunity, stress resilience, blood sugar balance — plus how to choose and use it safely.',
      fr: 'Explorez les bienfaits prouvés et traditionnels du Panax ginseng — énergie, immunité, résilience au stress, équilibre glycémique — et comment le choisir et l\'utiliser en toute sécurité.',
    },
    heroImage: 'fresh-ginseng-roots-with-vibrant-green-leaves-perfect-herbal-remedies-healthy-lifestyles.jpg',
    heroAlt: {
      en: 'Fresh Panax ginseng roots with vibrant green leaves — a classic adaptogenic herb prized for energy and vitality',
      fr: 'Racines fraîches de Panax ginseng avec des feuilles vertes éclatantes — une plante adaptogène classique appréciée pour l\'énergie et la vitalité',
    },
    datePublished: '2026-05-09',
    readingTime: 13,
    category: {
      en: 'Herbal Wellness',
      fr: 'Bien-être à base de plantes',
    },
    keywords: {
      en: 'ginseng benefits, panax ginseng, korean ginseng, ginseng for energy, ginseng immunity, adaptogen herbs, ginseng dosage, ginseng side effects, Panax Ginseng Capsules, Ginseng Honey Ginger, Ginkgo Ginseng Coffee, natural energy supplement',
      fr: 'bienfaits ginseng, panax ginseng, ginseng coréen, ginseng énergie, ginseng immunité, plantes adaptogènes, posologie ginseng, effets secondaires ginseng, Gélules Panax Ginseng, Ginseng Miel Gingembre, Café Ginkgo Ginseng, complément énergie naturel',
    },
  },
];

/** Look up a post by its language-independent id. */
export function getPost(id: string): BlogPostSummary | undefined {
  return POSTS.find((p) => p.id === id);
}

/** Build the full path for a post in a given language. */
export function postPath(post: BlogPostSummary, lang: Lang): string {
  return `/${lang}/blog/${post.slug[lang]}`;
}

/** Build a cross-lang `alternates` map for BaseLayout. */
export function postAlternates(post: BlogPostSummary): Record<Lang, string> {
  return {
    en: postPath(post, 'en'),
    fr: postPath(post, 'fr'),
  };
}
