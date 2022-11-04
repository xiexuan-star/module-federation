// 本地模块配置
// host/vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      // 远程模块声明
      remotes: {
        remote_app: "http://localhost:4173/assets/remoteEntry.js",
      },
      // 共享依赖声明
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
