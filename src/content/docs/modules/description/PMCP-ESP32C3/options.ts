import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "../../../../../components/Options.astro";

export const options_config: IOptionsConfig = {
  base_price: 14.8,
  options: [
    {
      name: "Тип дополнительного внешнего интерфейса",
      default: 1,
      variants: [
        {
          name: "x",
          desc: "Без дополнительного интерфейса",
          price: 777,
        } as IOptionVariant,
        {
          name: "RS485",
          desc: "RS485",
          price: 777,
        } as IOptionVariant,
        {
          name: "Eth",
          desc: "Ethernet",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Мощность преобразователя 24В / 5В",
      default: 1,
      variants: [
        {
          name: "x",
          desc: "Без преобразователя 24В/5В. Выбрать в случае установки модуля PMPS",
          price: 777,
        } as IOptionVariant,
        {
          name: "500",
          desc: "Преобразователь K7805-500 мощностью 2.5 Вт",
          price: 777,
        } as IOptionVariant,
        {
          name: "1000",
          desc: "Преобразователь K7805-1000 мощностью 5 Вт",
          price: 777,
        } as IOptionVariant,
        {
          name: "2000",
          desc: "Преобразователь K7805-2000 мощностью 10 Вт",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Мощность преобразователя 24В / 3.3В",
      default: 1,
      variants: [
        {
          name: "x",
          desc: "Без преобразователя 24В/3.3В. Выбрать в случае установки модуля PMPS",
          price: 777,
        } as IOptionVariant,
        {
          name: "500",
          desc: "Преобразователь K7803-500 мощностью 1.65 Вт",
          price: 777,
        } as IOptionVariant,
        {
          name: "1000",
          desc: "Преобразователь K7803-1000 мощностью 3.3 Вт",
          price: 777,
        } as IOptionVariant,
        {
          name: "2000",
          desc: "Преобразователь K7803-2000 мощностью 6.6 Вт",
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
