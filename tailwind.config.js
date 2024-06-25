/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ["Satoshi", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				"gray-100": "#F8F8FC",
				"dark-blue-200": "#0C315F",
			},
		},
	},
	plugins: [],
};
