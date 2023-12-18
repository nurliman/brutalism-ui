import { colors } from "@brutalism/tokens";

/** @type {import('tailwindcss').Config}*/
export const preset = {
  content: [],
  theme: {
    extend: {
      borderColor: ({ theme }) => ({
        DEFAULT: theme("colors.black"),
      }),
      colors,
    },
  },
};
