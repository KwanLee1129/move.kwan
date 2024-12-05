import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/move.kwan/kiosk-system/", // 현재 설정
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
