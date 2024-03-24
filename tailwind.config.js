/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/**/*.{html,js}", "./node_modules/react-tailwindcss-select/dist/index.esm.js"],
	theme: {
		extend: {
			colors: {
				custom: {
					colorone: "#2c3531",
					colortwo: "#116466",
					colorthree: "#d9b08c",
					colorfour: "#ffcb9a",
					colorfive: "#d1e8e2",
				},
			},
		},
		fontFamily: {
			pop: ["Poppins"],
		},
	},
	plugins: [],
};
