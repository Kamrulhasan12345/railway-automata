import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		emptyOutDir: false,
		outDir: "dist",
		lib: {
			formats: ["iife"],
			entry: "background/index.ts",
            name: "Railway Automata"
		},
		rollupOptions: {
			output: {
				entryFileNames: "background/background.js",
				extend: true,
			},
		},
	},
});
