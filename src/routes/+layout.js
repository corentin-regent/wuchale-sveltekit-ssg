import { browser } from '$app/environment';
import { locales } from 'virtual:wuchale/locales';
import { loadLocale } from 'wuchale/load-utils';
import '../locales/loader.svelte.js';

export const prerender = true;
export const ssr = true;
export const csr = true;
export const trailingSlash = 'always';

export const load = async ({ url }) => {
  if (browser) {
    const locale = locales.find((locale) => url.pathname.startsWith(`/${locale}/`)) ?? 'en';
    await loadLocale(locale);
  }
};
