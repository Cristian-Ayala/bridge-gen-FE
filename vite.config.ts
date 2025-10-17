import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isInDevMode = env.VITE_DEVTOOLS_ENABLED === "true";

  return {
    plugins: [...(isInDevMode ? [vueDevTools()] : []), vue()],
  };
});
