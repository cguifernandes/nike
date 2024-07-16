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
				"gray-200": "#959799",
				"gray-300": "#77787B",
				"dark-blue-200": "#0C315F",
			},
			backgroundImage: {
				"gradient-to-transparent":
					"linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
			},
		},
	},
	plugins: [],
};
