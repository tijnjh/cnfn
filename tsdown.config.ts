import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  platform: "neutral",
  dts: {
    isolatedDeclarations: true,
  },
  minify: true,
  noExternal: ["clsx", "tailwind-merge"],
});
