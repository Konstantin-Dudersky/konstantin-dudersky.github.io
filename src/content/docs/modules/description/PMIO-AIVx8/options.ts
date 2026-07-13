import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "../../../../../components/Options.astro";

export const options_config: IOptionsConfig = {
  base_price: 0.0,
  options: [
    {
      name: "Тип датчика канал CH0",
      default: 2,
      variants: [
        {
          name: "x",
          desc: "Канал не используется",
          price: 777,
        } as IOptionVariant,
        {
          name: "I",
          desc: "Вход 0-20 мА",
          price: 777,
        } as IOptionVariant,
        {
          name: "V",
          desc: "Вход 0-10 В",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Тип датчика канал CH1",
      default: 2,
      variants: [
        {
          name: "x",
          desc: "Канал не используется",
          price: 777,
        } as IOptionVariant,
        {
          name: "I",
          desc: "Вход 0-20 мА",
          price: 777,
        } as IOptionVariant,
        {
          name: "V",
          desc: "Вход 0-10 В",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Тип датчика канал CH2",
      default: 2,
      variants: [
        {
          name: "x",
          desc: "Канал не используется",
          price: 777,
        } as IOptionVariant,
        {
          name: "I",
          desc: "Вход 0-20 мА",
          price: 777,
        } as IOptionVariant,
        {
          name: "V",
          desc: "Вход 0-10 В",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Тип датчика канал CH3",
      default: 2,
      variants: [
        {
          name: "x",
          desc: "Канал не используется",
          price: 777,
        } as IOptionVariant,
        {
          name: "I",
          desc: "Вход 0-20 мА",
          price: 777,
        } as IOptionVariant,
        {
          name: "V",
          desc: "Вход 0-10 В",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Тип датчика канал CH4",
      default: 2,
      variants: [
        {
          name: "x",
          desc: "Канал не используется",
          price: 777,
        } as IOptionVariant,
        {
          name: "I",
          desc: "Вход 0-20 мА",
          price: 777,
        } as IOptionVariant,
        {
          name: "V",
          desc: "Вход 0-10 В",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Тип датчика канал CH5",
      default: 2,
      variants: [
        {
          name: "x",
          desc: "Канал не используется",
          price: 777,
        } as IOptionVariant,
        {
          name: "I",
          desc: "Вход 0-20 мА",
          price: 777,
        } as IOptionVariant,
        {
          name: "V",
          desc: "Вход 0-10 В",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Тип датчика канал CH6",
      default: 2,
      variants: [
        {
          name: "x",
          desc: "Канал не используется",
          price: 777,
        } as IOptionVariant,
        {
          name: "I",
          desc: "Вход 0-20 мА",
          price: 777,
        } as IOptionVariant,
        {
          name: "V",
          desc: "Вход 0-10 В",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Тип датчика канал CH7",
      default: 2,
      variants: [
        {
          name: "x",
          desc: "Канал не используется",
          price: 777,
        } as IOptionVariant,
        {
          name: "I",
          desc: "Вход 0-20 мА",
          price: 777,
        } as IOptionVariant,
        {
          name: "V",
          desc: "Вход 0-10 В",
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
