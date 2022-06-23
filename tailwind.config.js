/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Montserrat'],
			Roboto: ['Roboto'],
			Poppins: ['Poppins'],
		},
		extend: {
			screens: {
				xl: '1210px',
				'2xl': 'none',
			},
			container: {
				center: true,
				padding: 20,
			},
			colors: {
				accent: '#003466',
				darkAccent: '#032546',
				support: '#FE9E0D',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
