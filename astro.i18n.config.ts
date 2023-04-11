import { defineAstroI18nConfig } from "astro-i18n";

export default defineAstroI18nConfig({
  defaultLangCode: "en",
  supportedLangCodes: ["es"],
  showDefaultLangCode: false,
  translations: {
    en: "./public/translations/en.json",
    es: "./public/translations/es.json",
  },
});
