import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/move.kwan/todo-list/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [react()],
});
