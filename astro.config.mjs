// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

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
          items: [
            { label: "Обзор", link: "/modules/about" },
            { label: "PS-20W - Блок питания", link: "/modules/PMPS-20W" },
            { label: "CNV-DIx32 - 32 дискретных входа", link: "/modules/CNV-DIx32" },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
