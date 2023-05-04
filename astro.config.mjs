import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import UnoCSS from 'unocss/astro';
import robotsTxt from "astro-robots-txt";
import compressor from "astro-compressor";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";
import vercel from "@astrojs/vercel/serverless";
import auth from "auth-astro";

export default defineConfig({
  integrations: [image(), UnoCSS(), robotsTxt(),  mdx(), alpinejs(), auth(),compressor(),],
  output: "server",
  adapter: vercel()
});