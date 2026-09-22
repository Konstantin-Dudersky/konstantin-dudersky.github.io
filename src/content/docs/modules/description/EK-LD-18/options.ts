import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "../../../../../components/Options.astro";

const colorVariants: IOptionVariant[] = [
  { name: "x", desc: "Не устанавливать", price: 777 },
  { name: "G", desc: "Зелёный", price: 777 },
  { name: "GI", desc: "Зелёный, инвертированный", price: 777 },
  { name: "R", desc: "Красный", price: 777 },
  { name: "RI", desc: "Красный, инвертированный", price: 777 },
  { name: "B", desc: "Синий", price: 777 },
  { name: "BI", desc: "Синий, инвертированный", price: 777 },
  { name: "O", desc: "Оранжевый", price: 777 },
  { name: "OI", desc: "Оранжевый, инвертированный", price: 777 },
  { name: "W", desc: "Белый", price: 777 },
  { name: "WI", desc: "Белый, инвертированный", price: 777 },
  { name: "Y", desc: "Желтый", price: 777 },
  { name: "YI", desc: "Желтый, инвертированный", price: 777 },
  { name: "E", desc: "Изумрудный", price: 777 },
  { name: "EI", desc: "Изумрудный, инвертированный", price: 777 },
];

export const options_config: IOptionsConfig = {
  base_price: 0.0,
  options: [
    {
      name: "Цвет светодиода 0",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 1",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 2",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 3",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 4",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 5",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 6",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 7",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 8",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 9",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 10",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 11",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 12",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 13",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 14",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 15",
      default: 1,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 16",
      default: 6,
      variants: colorVariants,
    } as IOption,
    {
      name: "Цвет светодиода 17",
      default: 6,
      variants: colorVariants,
    } as IOption,
  ],
};
