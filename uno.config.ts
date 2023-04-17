import { defineConfig } from "unocss";
import { presetUno, presetIcons } from "unocss";
import { presetDaisy } from "unocss-preset-daisy";

export default defineConfig({
  presets: [
    presetUno(),
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
