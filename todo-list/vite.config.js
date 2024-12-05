import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/move.kwan/todo-list/", // 현재 설정
  plugins: [react()],
});
