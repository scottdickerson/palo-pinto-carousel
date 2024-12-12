// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), tailwind()],
  output: "server",
  adapter: vercel(),
  // output: 'static',
  // By default we're building a serverless vercel for publish to preview, however by commenting out the adapter we can build a static site that we would use locally or deploy to a static host like Netlify.
});
