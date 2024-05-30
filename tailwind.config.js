/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/preline/preline.js'
	],

	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class'
		}),
		require('preline/plugin'),
		require('daisyui')
	],

	theme: {
		extend: {}
	}
};

export default config;
