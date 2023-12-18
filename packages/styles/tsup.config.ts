import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return [
    {
      entry: ["src/index.ts"],
      format: ["cjs", "esm"],
      target: "es5",
      clean: true,
      dts: true,
      sourcemap: !options.watch,
    },
    {
      entry: ["src/main.css"],
      clean: true,
      sourcemap: !options.watch,
    },
    {
      entry: { "main.min": "src/main.css" },
      clean: true,
      minify: true,
      sourcemap: !options.watch,
    },
  ];
});
