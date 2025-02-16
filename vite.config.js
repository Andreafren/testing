import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test/setup.js",
    coverage:{
      provider: 'istanbul'
    }
    // da aggiungere in ambiente test
  }
});
//npm install --save-dev jsdom
//npm install --save-dev vitest
