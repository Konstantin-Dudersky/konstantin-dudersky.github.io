import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "../../../../../components/Options.astro";

export const options_config: IOptionsConfig = {
  base_price: 777,
  options: [
    {
      name: "Количество каналов выходов",
      default: 1,
      variants: [
        {
          name: "8",
          desc: "8 каналов",
          price: 777,
        } as IOptionVariant,
        {
          name: "16",
          desc: "16 каналов",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Коннекторы шины IBus",
      default: 2,
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
    } as IOption,
  ],
};
