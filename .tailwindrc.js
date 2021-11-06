module.exports = {
	mode: "jit",
	purge: {
		enabled: true,
		content: ["./app/**/*.html", "./app/**/*.js"],
	},
	theme: {
		extend: {
			inset: {
				"-30": "-1.875rem",
			},

			colors: {
				gray: {
					500: "#282828",
					600: "#1E1E1E",
					700: "#141414",
					800: "#0a0a0a",
					900: "#000000",
				},
				popup: {
					red: "#CC001B",
					green: "#28A443",
					blue: "#16A3DF",
					yellow: "#F5AB00",
					magenta: "#9B5094",
				},
				html: {
					gray: "#808080",
				},
			},

			fontFamily: {
				sans: ["Arial", "Helvetica", "sans-serif"],
			},

			borderRadius: {
				"2xl": "30px",
			},

			screens: {
				lg: "1400px",
			},
		},
	},
	corePlugins: {
		preflight: false,
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
}
