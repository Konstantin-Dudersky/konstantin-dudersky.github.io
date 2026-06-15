// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://konstantin-dudersky.github.io",
  integrations: [
    starlight({
      title: "Электроника",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/Konstantin-Dudersky" },
        { icon: "youtube", label: "YouTube", href: "https://www.youtube.com/@Tokarev_by" },
      ],
      sidebar: [
        {
          label: "Модули",
          collapsed: true,
          items: [
            { label: "Обзор", link: "/modules/about" },
            { label: "PS-20W - Блок питания", link: "/modules/pmps-20w/" },
            { label: "CNV-DIx32 - 32 дискретных входа", link: "/modules/pmcnv-dix32" },
          ],
        },
      ],
      components: {
        Header: "./src/components/Header.astro",
      },
    }),
  ],
});
