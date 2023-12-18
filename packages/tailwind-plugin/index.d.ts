import type { withOptions } from "tailwindcss/plugin";

declare const plugin: ReturnType<typeof withOptions<void | object>>;

export { plugin };
