
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ["pokemon.com"],
  },

 
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default config;
