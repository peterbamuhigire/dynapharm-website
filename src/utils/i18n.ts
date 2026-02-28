export const LANGUAGES = {
  en: { name: 'English', flag: '\u{1F1EC}\u{1F1E7}', dir: 'ltr' as const },
  fr: { name: 'Fran\u00e7ais', flag: '\u{1F1EB}\u{1F1F7}', dir: 'ltr' as const },
} as const;

export type Lang = keyof typeof LANGUAGES;
export const DEFAULT_LANG: Lang = 'en';
export const SUPPORTED_LANGS = Object.keys(LANGUAGES) as Lang[];

/**
 * Extract the language code from a URL pathname.
 * Falls back to the default language if the path segment
 * does not match a supported language.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in LANGUAGES) return lang as Lang;
  return DEFAULT_LANG;
}

/**
 * Build a localised path for the given language.
 * Strips any existing language prefix so paths can be
 * safely switched between languages.
 */
export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.replace(/^\/(en|fr)/, '').replace(/^\//, '');
  return `/${lang}/${cleanPath}`.replace(/\/$/, '') || `/${lang}`;
}

/**
 * Return the alternate-language version of a path.
 * Useful for the language switcher component.
 */
export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'fr' : 'en';
}

// ---------------------------------------------------------------------------
// Translation strings
// ---------------------------------------------------------------------------

const translations = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      business: 'Business Opportunity',
      wellness: 'Wellness Guide',
      about: 'About',
      contact: 'Contact',
      cta: 'Start Your Journey',
    },
    footer: {
      tagline: 'Health, Wealth, Freedom \u2014 The Dynapharm Way',
      email: 'info@dynapharmafrica.com',
      countries: 'Operating in 40+ countries across Africa and beyond',
      copyright: `\u00A9 ${new Date().getFullYear()} Dynapharm Africa. All rights reserved.`,
      disclaimer: 'Dynapharm products are food supplements, not medicines.',
      faq: 'FAQ',
    },
    common: {
      readMore: 'Find Out More',
      getInTouch: 'Get in Touch',
      exploreProducts: 'Explore Our Products',
      startJourney: 'Start Your Journey',
      viewDetails: 'View Details',
      contactDistributor: 'Contact Your Distributor',
      allProducts: 'All Products',
      close: 'Close',
      backToTop: 'Back to top',
      languageSwitcher: 'Switch language',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      products: 'Produits',
      business: "Opportunit\u00e9 d\u2019Affaires",
      wellness: 'Guide Bien-\u00CAtre',
      about: '\u00C0 Propos',
      contact: 'Contact',
      cta: 'Commencer Maintenant',
    },
    footer: {
      tagline: 'Sant\u00e9, Richesse, Libert\u00e9 \u2014 La Voie Dynapharm',
      email: 'info@dynapharmafrica.com',
      countries: 'Pr\u00e9sent dans plus de 40 pays en Afrique et au-del\u00e0',
      copyright: `\u00A9 ${new Date().getFullYear()} Dynapharm Africa. Tous droits r\u00e9serv\u00e9s.`,
      disclaimer: 'Les produits Dynapharm sont des compl\u00e9ments alimentaires, non des m\u00e9dicaments.',
      faq: 'FAQ',
    },
    common: {
      readMore: 'En Savoir Plus',
      getInTouch: 'Nous Contacter',
      exploreProducts: 'Explorer Nos Produits',
      startJourney: 'Commencer Maintenant',
      viewDetails: 'Voir les D\u00e9tails',
      contactDistributor: 'Contacter Votre Distributeur',
      allProducts: 'Tous les Produits',
      close: 'Fermer',
      backToTop: 'Retour en haut',
      languageSwitcher: 'Changer de langue',
      menuOpen: 'Ouvrir le menu',
      menuClose: 'Fermer le menu',
    },
  },
} as const;

// ---------------------------------------------------------------------------
// Translation accessor
// ---------------------------------------------------------------------------

/**
 * Retrieve a single translated string by section and key.
 *
 * @example
 *   t('fr', 'nav', 'home')   // => "Accueil"
 *   t('en', 'common', 'close') // => "Close"
 */
export function t(lang: Lang, section: string, key: string): string {
  const langData = translations[lang] || translations[DEFAULT_LANG];
  const sectionData = (langData as Record<string, Record<string, string>>)[section];
  if (!sectionData) return key;
  return sectionData[key] || key;
}

/**
 * Retrieve an entire translation section as an object.
 * Handy when a component needs many strings from one section.
 *
 * @example
 *   const nav = tSection('fr', 'nav');
 *   nav.home // => "Accueil"
 */
export function tSection(lang: Lang, section: string): Record<string, string> {
  const langData = translations[lang] || translations[DEFAULT_LANG];
  return (langData as Record<string, Record<string, string>>)[section] || {};
}

// ---------------------------------------------------------------------------
// Navigation helpers
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Return the full navigation items array for a given language,
 * ready to be rendered in a header or mobile menu.
 */
export function getNavItems(lang: Lang): NavItem[] {
  return [
    { label: t(lang, 'nav', 'home'), href: `/${lang}` },
    { label: t(lang, 'nav', 'products'), href: `/${lang}/products` },
    { label: t(lang, 'nav', 'business'), href: `/${lang}/business-opportunity` },
    { label: t(lang, 'nav', 'wellness'), href: `/${lang}/wellness-guide` },
    { label: t(lang, 'nav', 'about'), href: `/${lang}/about` },
    { label: t(lang, 'nav', 'contact'), href: `/${lang}/contact` },
  ];
}

/**
 * Return the CTA button label for a given language.
 */
export function getCtaLabel(lang: Lang): string {
  return t(lang, 'nav', 'cta');
}
