module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			container: {
				padding: {
				  '2xl': '9rem',
				},
			  },
		},
	},
	plugins: [require("@tailwindcss/forms", 'tailwind-scrollbar')],
};
