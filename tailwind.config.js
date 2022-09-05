/// <reference path='./custom-types.d.ts' />

const theme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'tj-dark-blue': '#24324f'
			}
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("daisyui")
	],
	daisyui: {
		themes: [
			{
				traveljox: {
					"primary": "#4db7fe",
					"primary-content": "#fff",
					"secondary": "#00beff",
					"accent": "#4f46e5",
					"neutral": "#2f3b59",
					"neutral-content": "#fff",
					"base-100": "#f9f9f9",
					"info": "#ffffff",
					"success": "#1D9581",
					"warning": "#FAB36B",
					"error": "#E92F3C"
				}
			},
			"business"
		],
		lightTheme: "traveljox",
		darkTheme: "business"
	}
}
