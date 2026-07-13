import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "../../../../../components/Options.astro";

export const options_config: IOptionsConfig = {
  base_price: 14.8,
  options: [
    {
      name: "Количество реле",
      variants: [
        {
          name: "1",
          desc: "1 реле",
          price: 777,
        } as IOptionVariant,
        {
          name: "2",
          desc: "2 реле",
          price: 777,
        } as IOptionVariant,
        {
          name: "3",
          desc: "3 реле",
          price: 777,
        } as IOptionVariant,
        {
          name: "4",
          desc: "4 реле",
          price: 777,
        } as IOptionVariant,
        {
          name: "5",
          desc: "5 реле",
          price: 777,
        } as IOptionVariant,
        {
          name: "6",
          desc: "6 реле",
          price: 777,
        } as IOptionVariant,
        {
          name: "7",
          desc: "7 реле",
          price: 777,
        } as IOptionVariant,
      ],
      default: 6,
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
