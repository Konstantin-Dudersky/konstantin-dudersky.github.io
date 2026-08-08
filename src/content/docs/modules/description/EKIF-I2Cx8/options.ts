import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "@components/Options.astro";


const channel: IOptionVariant[] = [
  { name: "x", desc: "Не использовать", price: 777 },
  { name: "3", desc: "Питание 3.3 В", price: 777 },
  { name: "5", desc: "Питание 5 В", price: 777 },
];

export const options_config: IOptionsConfig = {
  base_price: 14.8,
  options: [
    {
      name: "Канал CH0",
      default: 1,
      variants: channel,
    } as IOption,
    {
      name: "Канал CH1",
      default: 1,
      variants: channel,
    } as IOption,
    {
      name: "Канал CH2",
      default: 1,
      variants: channel,
    } as IOption,
    {
      name: "Канал CH3",
      default: 1,
      variants: channel,
    } as IOption,
    {
      name: "Канал CH4",
      default: 1,
      variants: channel,
    } as IOption,
    {
      name: "Канал CH5",
      default: 1,
      variants: channel,
    } as IOption,
    {
      name: "Канал CH6",
      default: 1,
      variants: channel,
    } as IOption,
    {
      name: "Канал CH7",
      default: 1,
      variants: channel,
    } as IOption,
    {
      name: "Мощность блока питания 3.3 В",
      default: 1,
      variants: [
        {
          name: "1W",
          desc: "Мощность 1 Вт",
          price: 777,
        } as IOptionVariant,
        {
          name: "2W",
          desc: "Мощность 2 Вт",
          price: 777,
        } as IOptionVariant,
        {
          name: "3W",
          desc: "Мощность 3 Вт",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Мощность блока питания 5 В",
      default: 1,
      variants: [
        {
          name: "1W",
          desc: "Мощность 1 Вт",
          price: 777,
        } as IOptionVariant,
        {
          name: "2W",
          desc: "Мощность 2 Вт",
          price: 777,
        } as IOptionVariant,
        {
          name: "3W",
          desc: "Мощность 3 Вт",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
  ],
};
