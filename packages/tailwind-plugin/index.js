import twPlugin from "tailwindcss/plugin";
import { baseStyles, componentsStyles, utilsStyles } from "@brutalism/styles";
import { preset } from "@brutalism/tailwind-preset";

export const plugin = twPlugin.withOptions(
  (_options) =>
    async ({ addBase, addComponents, addUtilities }) => {
      addBase(baseStyles);
      addComponents(componentsStyles);
      addUtilities(utilsStyles);
    },
  (_options) => {
    return preset;
  },
);
