// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://konstantin-dudersky.github.io",
  base: "/automation",
  integrations: [
    starlight({
      title: "My Docs",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/withastro/starlight" }],
      sidebar: [
        {
          label: "Модули",
          collapsed: true,
          items: [
            { label: "Обзор", link: "/modules/about" },
            { label: "PS-20W - Блок питания", link: "/modules/PMPS-20W" },
            { label: "CNV-DIx32 - 32 дискретных входа", link: "/modules/CNV-DIx32" },
          ],
        },
      ],
    }),
    sitemap(),
  ],
});
