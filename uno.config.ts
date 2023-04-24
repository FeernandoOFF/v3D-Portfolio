import { defineConfig } from "unocss";
import {
  presetTypography,
  presetWebFonts,
  presetUno,
  presetIcons,
} from "unocss";
import { presetDaisy } from "unocss-preset-daisy";

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Montserrat",
        custom: "Montserrat",
        mono: ["Fira Code", "Fira Mono:400,700"],
      },
    }),
    presetDaisy({
      themes: [
        {
          light: {
            primary: "#7146AD",
            secondary: "#57B584",
            "base-100": "#F4F4F4",
            neutral: "#8D99AE",
            accent: "#7146AD",
            info: "#303152",
            success: "#36D399",
            warning: "#FBBD23",
            error: "#F87272",
          },
          dark: {
            primary: "#7146AD",
            secondary: "#57B584",
            "base-100": "#121826",
            neutral: "#8D99AE",
            accent: "#7146AD",
            info: "#303152",
            success: "#36D399",
            warning: "#FBBD23",
            error: "#F87272",
          },
        },
      ],
    }),
    presetIcons({
      collections: {
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
      },
    }),
  ],
});
