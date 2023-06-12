const defaultTheme = require('tailwindcss/defaultTheme')
const { addDynamicIconSelectors } = require('@iconify/tailwind');
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
				'quick-sand': ['Quicksand', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	daisyui: {
		themes: [
			{
				light: {
					...require("daisyui/src/colors/themes")["[data-theme=light]"],
					primary: "#342B6C",
					secondary: "#57B584",
					accent: "#57B584",
					neutral: "#ffffff",
					"base-100": "#F4F4F4",
					info: "#303152",
					success: "#36D399",
					warning: "#FBBD23",
					error: "#F87272",
				},
				dark: {
					...require("daisyui/src/colors/themes")["[data-theme=dark]"],
					primary: "#342B6C",
					secondary: "#57B584",
					accent: "#57B584",
					neutral: "#ffffff",
					"base-100": "#121826",
					info: "#303152",
					success: "#36D399",
					warning: "#FBBD23",
					error: "#F87272",
				}
			}
		]
	},
	plugins: [require("daisyui"), require('@tailwindcss/typography'), addDynamicIconSelectors(),
	/** @type {import('tailwindcss/types/config').PluginCreator} */
	plugin(({ addUtilities }) => {
		addUtilities({
			'.heading-1': {
				'@apply font-semibold text-2xl lg:text-6xl': {},
			},
			'.bg-glass': {
				background: 'rgba(160, 161, 161, 0.25)',
				'border-color': 'rgba(203, 202, 202, 0.25)',
				'border-width': '1px',
				'backdrop-filter': 'blur(10px)',
				'-webkit-backdrop-filter': 'blur(10px)',
			}
		})
	})
	],
}
