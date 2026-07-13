// @ts-check
import { defineConfig, svgoOptimizer } from "astro/config";
import starlight from "@astrojs/starlight";
import { unified } from "@astrojs/markdown-remark";

import starlightImageZoom from 'starlight-image-zoom'
import starlightLinksValidator from 'starlight-links-validator'
import starlightScrollToTop from "starlight-scroll-to-top";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import starlightThemeNord from "starlight-theme-nord";
import starlightSidebarTopics from 'starlight-sidebar-topics'
import md3Theme from 'starlight-theme-md3';



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
      plugins: [starlightScrollToTop(), md3Theme({}), starlightImageZoom(), starlightLinksValidator(),
        starlightSidebarTopics([
          {
            label: "Модули",
            link: '/modules/overview',
            items: [
              "modules/overview",
              {
                label: "Описание",
                collapsed: true,
                items: [{ autogenerate: { directory: "modules/description", collapsed: true } }]
              },
              {
                label: "Настройка",
                collapsed: true,
                items: [
                   "modules/settings/module_config",
                   "modules/settings/can_dbc",
                   "modules/settings/can_literature",
                ],
              },
            ],
          },
          {
            label: "Весоизмерительные системы",
            link: "/weight/",
            items: [],
          },
          {
            label: "Распределённая периферия",
            link: "/distributed/",
            items: [],
          },
          {
            label: "Контакты",
            link: "/contacts/",
            items: [],
          },
        ],),
      ],
      credits: true,
    }),
  ],
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
