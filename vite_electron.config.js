import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "app",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "app/electron/main.ts"),
        preload: resolve(__dirname, "app/electron/preload.ts"),
      },
      output: {
        entryFileNames: "electron/[name].js",
        format: "cjs",
      },
    },
  },
});
