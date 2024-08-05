import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "docs",
  },
  base: "",
  plugins: [vue()],
  server: {
    open: "http://127.0.0.1:5173/ask/",
  },
});
