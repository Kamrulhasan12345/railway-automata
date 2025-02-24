import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		rollupOptions: {
			input: {
				popup: "popup/index.html",
				background: "background/index.html",
			},
			output: {
				entryFileNames: "[name]/[name].js",
			},
		},
		emptyOutDir: true,
	},
});
