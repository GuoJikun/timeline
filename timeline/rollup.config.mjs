import { defineConfig } from "rollup";
import vue from "@vitejs/plugin-vue";
import terser from "@rollup/plugin-terser";
import scss from "rollup-plugin-scss";

import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

export default defineConfig(() => [
  {
    input: resolve(
      fileURLToPath(new URL(".", import.meta.url)),
      "src/index.scss"
    ),
    output: {
      dir: "dist",
    },
    plugins: [
      scss({
        fileName: "index.css",
        output: "dist/index.css",
      }),
    ],
  },
  {
    input: resolve(
      fileURLToPath(new URL(".", import.meta.url)),
      "src/index.js"
    ),
    output: [
      {
        file: "dist/index.js",
        format: "umd",
        name: "Timeline",
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
      {
        file: "dist/index.mjs",
        format: "es",
        exports: "named",
      },
    ],
    external: ["vue"],
    plugins: [vue(), terser()],
  },
]);
