import type { Config } from "tailwindcss";
import { preset } from "@brutalism/tailwind-preset";

const config = {
  darkMode: "class",
  content: [],
  presets: [preset],
} satisfies Config;

export default config;
