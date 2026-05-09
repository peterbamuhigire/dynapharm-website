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
    id: 'ganoderma-benefits',
    slug: {
      en: 'ganoderma-benefits',
      fr: 'bienfaits-du-ganoderma',
    },
    title: {
      en: 'Ganoderma (Reishi): Benefits, Uses & How To Take It',
      fr: 'Ganoderma (Reishi) : bienfaits, utilisations et mode d\'emploi',
    },
    description: {
      en: 'Discover the science and tradition behind Ganoderma lucidum (Reishi / Lingzhi) — the "mushroom of immortality." Learn its benefits for immunity, energy, sleep and stress, and how to take it safely.',
      fr: 'Découvrez la science et la tradition du Ganoderma lucidum (Reishi / Lingzhi) — le « champignon de l\'immortalité ». Apprenez ses bienfaits pour l\'immunité, l\'énergie, le sommeil et le stress, et comment le consommer en toute sécurité.',
    },
    heroImage: 'lingzhi-reishi-mushrooms-medicinal-fungi-white-background.jpg',
    heroAlt: {
      en: 'Whole dried Lingzhi (Ganoderma lucidum) mushrooms — the legendary "mushroom of immortality" of traditional Chinese medicine',
      fr: 'Champignons Lingzhi (Ganoderma lucidum) entiers et séchés — le légendaire « champignon de l\'immortalité » de la médecine traditionnelle chinoise',
    },
    datePublished: '2026-05-09',
    readingTime: 13,
    category: {
      en: 'Herbal Wellness',
      fr: 'Bien-être à base de plantes',
    },
    keywords: {
      en: 'ganoderma benefits, reishi mushroom, lingzhi benefits, ganoderma lucidum, ganoderma immune support, ganoderma sleep, beta-glucans, triterpenes, adaptogen mushroom, Yeegano, Gano coffee, Gano chocolate, Presidents Choice coffee, traditional Chinese medicine',
      fr: 'bienfaits ganoderma, reishi, lingzhi, ganoderma lucidum, ganoderma immunité, ganoderma sommeil, bêta-glucanes, triterpènes, champignon adaptogène, Yeegano, Café Gano, Chocolat Gano, café President\'s Choice, médecine traditionnelle chinoise',
    },
  },
  {
    id: 'green-tea-benefits',
    slug: {
      en: 'green-tea-benefits',
      fr: 'bienfaits-du-the-vert',
    },
    title: {
      en: 'Green Tea: Health Benefits, Catechins & Daily Use',
      fr: 'Thé Vert : bienfaits santé, catéchines et usage quotidien',
    },
    description: {
      en: 'Explore the science-backed benefits of green tea — antioxidant catechins, EGCG, healthy weight, heart, brain and skin. Plus how to brew it, dose it, and combine it with other natural ingredients.',
      fr: 'Découvrez les bienfaits du thé vert soutenus par la science — catéchines antioxydantes, EGCG, poids, cœur, cerveau et peau. Ainsi que comment le préparer, le doser et l\'associer à d\'autres ingrédients naturels.',
    },
    heroImage: 'lush-green-tea-plantation-fresh-leaves-morning-light-scenic-farmland-asia.jpg',
    heroAlt: {
      en: 'A lush green tea plantation in morning light — the source of the antioxidant catechins that make green tea one of the world\'s healthiest drinks',
      fr: 'Une plantation luxuriante de thé vert sous la lumière du matin — la source des catéchines antioxydantes qui font du thé vert l\'une des boissons les plus saines au monde',
    },
    datePublished: '2026-05-09',
    readingTime: 12,
    category: {
      en: 'Herbal Wellness',
      fr: 'Bien-être à base de plantes',
    },
    keywords: {
      en: 'green tea benefits, EGCG, catechins, green tea extract, green tea for weight loss, green tea heart health, green tea antioxidant, matcha benefits, Green Tea Coffee, Green Tea Capsules, Kacip Fatimah Coffee, Red Coffee with Ginseng',
      fr: 'bienfaits thé vert, EGCG, catéchines, extrait de thé vert, thé vert perte de poids, thé vert cœur, thé vert antioxydant, bienfaits matcha, Café au Thé Vert, Gélules de Thé Vert, Café Kacip Fatimah, Café Rouge au Ginseng',
    },
  },
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
