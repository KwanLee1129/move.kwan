import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/todo-list/", // 여기서 'todo-list'는 GitHub 저장소 이름입니다.
});
