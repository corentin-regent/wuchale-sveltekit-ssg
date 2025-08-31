import { locales } from 'virtual:wuchale/locales';
import { loadLocales, runWithLocale } from 'wuchale/load-utils/server';
import * as main from './locales/loader.ssr.svelte.js';

await loadLocales(main.key, main.loadIDs, main.loadCatalog, locales);

export const handle = async ({ event, resolve }) => {
  const locale = locales.find((locale) => event.url.pathname.startsWith(`/${locale}/`)) ?? 'en';
  return await runWithLocale(locale, () =>
    resolve(event, {
      transformPageChunk: ({ html }) =>
        html.replace('%sveltekit.lang%', locale),
    })
  );
};
