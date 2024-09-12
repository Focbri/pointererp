/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'img-mesa': "url('images/SLIDER.png')",
			},
			colors: {
				"c-ventas": "#00abe1",
				"c-compras": "#633c8f",
				"c-tesoreria": "#f8aa12",
				"c-contabilidad": "#5baa2d",
				"c-produccion": "#005796",
				"c-recursosHumanos": "#e94290",
				"c-proyectos": "#fe8d00",
				'pointer-text': "#005796",

			},
			fontFamily: {
				sans: ["Muller", ...defaultTheme.fontFamily.sans],
			}
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#1d6998",
					"secondary": "#25273D",
					"accent": "#824E95",
					"neutral": "#322735",
					"base-100": "#fff",
					"info": "#84C4F0",
					"success": "#78A83C",
					"warning": "#fe8d00",
					"error": "#eb2d40",
				},
			},
		]
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}

