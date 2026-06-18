// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightScrollToTop from "starlight-scroll-to-top";

// https://astro.build/config
export default defineConfig({
  site: "https://konstantin-dudersky.github.io",
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
