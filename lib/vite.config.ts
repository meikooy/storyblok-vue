import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const name = "storyblok-vue";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.ts"),
        name: "storyblokVue",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
      rollupOptions: {
        output: {
          globals: {
            vue: "Vue",
            "@storyblok/js": "StoryblokJS",
          },
        },
        external: ["vue", "@storyblok/js"],
      },
    },
    plugins: [vue()],
  };
});
