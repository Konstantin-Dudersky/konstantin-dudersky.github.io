import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "@components/Options.astro";

export const options_config: IOptionsConfig = {
  base_price: 14.8,
  options: [
    {
      name: "Мощность блока питания AC230 / DC24",
      default: 4,
      variants: [
        {
          name: "x",
          desc: "Не устанавливать",
          price: 777,
        } as IOptionVariant,
        {
          name: "5",
          desc: "Мощность 5 Вт",
          price: 777,
        } as IOptionVariant,
        {
          name: "10",
          desc: "Мощность 10 Вт",
          price: 777,
        } as IOptionVariant,
        {
          name: "15",
          desc: "Мощность 15 Вт",
          price: 777,
        } as IOptionVariant,
        {
          name: "20",
          desc: "Мощность 20 Вт",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Мощность преобразователя 24В / 5В",
      default: 0,
      variants: [
        {
          name: "x",
          desc: "Без преобразователя 24В/5В",
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
      default: 0,
      variants: [
        {
          name: "x",
          desc: "Без преобразователя 24В/3.3В",
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
  ],
};
