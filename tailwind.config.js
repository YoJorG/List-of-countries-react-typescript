/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,css}',
		'./node_modules/react-tailwindcss-select/dist/index.esm.js',
		'./routers/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		fontFamily: {
			nunito: ['Nunito', 'sans-serif'],
		},
		extend: {},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('@tailwindcss/forms'), require('daisyui')],
}
