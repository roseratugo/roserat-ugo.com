import frTranslations from './translations/fr.json';
import enTranslations from './translations/en.json';

export type Lang = 'fr' | 'en';

const translations = {
  fr: frTranslations,
  en: enTranslations,
} as const;

export const defaultLang: Lang = 'fr';

export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'fr';
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = translations[lang];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof value === 'string' ? value : key;
  };
}

// Path mappings between languages
const pathMappings: Record<string, Record<Lang, string>> = {
  'a-propos': { fr: 'a-propos', en: 'about' },
  about: { fr: 'a-propos', en: 'about' },
  parcours: { fr: 'parcours', en: 'journey' },
  journey: { fr: 'parcours', en: 'journey' },
  projets: { fr: 'projets', en: 'projects' },
  projects: { fr: 'projets', en: 'projects' },
  blog: { fr: 'blog', en: 'blog' },
  distinctions: { fr: 'distinctions', en: 'distinctions' },
};

export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  // Remove leading slash and split
  const parts = currentPath.replace(/^\//, '').split('/');

  // First part is the current language
  const [, ...pathParts] = parts;

  // Build new path
  let newPath = `/${targetLang}`;

  for (const part of pathParts) {
    const mapping = pathMappings[part];
    if (mapping) {
      newPath += `/${mapping[targetLang]}`;
    } else {
      newPath += `/${part}`;
    }
  }

  return newPath || `/${targetLang}`;
}

export function getAlternateLinks(currentPath: string): { lang: Lang; href: string }[] {
  return (['fr', 'en'] as Lang[]).map((lang) => ({
    lang,
    href: getLocalizedPath(currentPath, lang),
  }));
}
