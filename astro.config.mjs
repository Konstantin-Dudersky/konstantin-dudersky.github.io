// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { unified } from "@astrojs/markdown-remark";

import starlightScrollToTop from "starlight-scroll-to-top";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

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
      locales: {
        root: {
          label: "Russian",
          lang: "ru-RU",
        },
      },
      social: [
        { icon: "telegram", label: "Telegram", href: "https://t.me/konstantin_dudersky" },
        { icon: "email", label: "Email", href: "mailto:mail@kdudersky.ru" },
        { icon: "youtube", label: "YouTube", href: "https://www.youtube.com/@Tokarev_by" },
        { icon: "github", label: "GitHub", href: "https://github.com/Konstantin-Dudersky" },
      ],
      customCss: ["./src/styles/global.css", "./src/fonts/font-face.css"],
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
          label: "Контакты",
          link: "/contacts/",
        },
      ],
      lastUpdated: true,
      components: {
        Header: "./src/components/Header.astro",
      },
      plugins: [starlightScrollToTop()],
      credits: true,
    }),
  ],
});
