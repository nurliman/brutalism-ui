import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/*.ts"],
    format: ["cjs", "esm"],
    target: "es5",
    clean: true,
    dts: true,
    sourcemap: !options.watch,
  };
});
