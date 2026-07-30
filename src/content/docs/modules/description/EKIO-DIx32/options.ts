import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "../../../../../components/Options.astro";

export const options_config: IOptionsConfig = {
  base_price: 14.8,
  options: [
    {
      name: "Количество дискретных входов",
      default: 3,
      variants: [
        {
          name: "8",
          desc: "8 каналов",
          price: 0.8,
        } as IOptionVariant,
        {
          name: "16",
          desc: "16 каналов",
          price: 1.6,
        } as IOptionVariant,
        {
          name: "24",
          desc: "24 канала",
          price: 2.4,
        } as IOptionVariant,
        {
          name: "32",
          desc: "32 канала",
          price: 3.2,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Схема подключения входов",
      variants: [
        {
          name: "PNP",
          desc: "Схема подключения PNP",
          price: 0.0,
        } as IOptionVariant,
        {
          name: "NPN",
          desc: "Схема подключения NPN",
          price: 0.0,
        } as IOptionVariant,
      ],
      default: 0,
    } as IOption,
    {
      name: "Коннекторы шины IBus",
      variants: [
        {
          name: "T",
          desc: "Только сверху (top)",
          price: 0.1,
        } as IOptionVariant,
        {
          name: "B",
          desc: "Только снизу (bottom)",
          price: 0.1,
        } as IOptionVariant,
        {
          name: "TB",
          desc: "Сверху и снизу (top + bottom)",
          price: 0.2,
        } as IOptionVariant,
      ],
      default: 2,
    } as IOption,
  ],
};
