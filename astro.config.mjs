// @ts-check
import { defineConfig, svgoOptimizer } from "astro/config";
import starlight from "@astrojs/starlight";
import { unified } from "@astrojs/markdown-remark";
import starlightImageZoom from 'starlight-image-zoom'


import starlightScrollToTop from "starlight-scroll-to-top";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import starlightThemeNord from "starlight-theme-nord";

// https://astro.build/config
export default defineConfig({
  site: "https://konstantin-dudersky.github.io",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { output: "mathml" }]],
    }),
  },
  integrations: [
    starlight({
      title: "Электроника",
      logo: {
        src: "./public/flat-color-icons--electronics.svg",
      },
      social: [
        { icon: "telegram", label: "Telegram", href: "https://t.me/konstantin_dudersky" },
        { icon: "email", label: "Email", href: "mailto:mail@kdudersky.ru" },
        { icon: "youtube", label: "YouTube", href: "https://www.youtube.com/@Tokarev_by" },
        { icon: "github", label: "GitHub", href: "https://github.com/Konstantin-Dudersky" },
      ],
      customCss: [
        "./src/styles/global.css",
        "./src/styles/icons.css",
        "@fontsource/stix-two-math",
        "@fontsource/pt-sans",
      ],
      sidebar: [
        {
          label: "Весоизмерительные системы",
          link: "/weight/",
        },
        {
          label: "Распределённая периферия",
          link: "/distributed/",
        },
        {
          label: "Модули",
          collapsed: true,
          items: [{ autogenerate: { directory: "modules", collapsed: true } }],
        },
        {
          label: "Настройка",
          collapsed: true,
          items: [{ autogenerate: { directory: "settings", collapsed: true } }],
        },
        {
          label: "Контакты",
          link: "/contacts/",
        },
      ],
      locales: {
        root: {
          label: "Russian",
          lang: "ru-RU",
        },
      },
      lastUpdated: true,
      favicon: "/flat-color-icons--electronics.svg",
      components: {
        Header: "./src/components/Header.astro",
      },
      plugins: [starlightScrollToTop(), starlightThemeNord(), starlightImageZoom()],
      credits: true,
    }),
  ],
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
