import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/kiosk-system/", // GitHub Pages 경로에 맞게 수정
});
