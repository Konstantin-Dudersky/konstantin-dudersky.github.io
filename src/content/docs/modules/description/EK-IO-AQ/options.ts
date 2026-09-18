import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "@components/Options.astro";

const channel: IOptionVariant[] = [
  { name: "x", desc: "Не использовать", price: 777 },
  { name: "V", desc: "Напряжение 0–10 В", price: 777 },
  { name: "I", desc: "Ток 0–20 мА / 4–20 мА", price: 777 },
];

export const options_config: IOptionsConfig = {
  base_price: 14.8,
  options: [
    {
      name: "Тип выхода канал CH0",
      default: 2,
      variants: channel
    } as IOption,
    {
      name: "Тип выхода канал CH1",
      default: 2,
      variants: channel
    } as IOption,
    {
      name: "Тип выхода канал CH2",
      default: 2,
      variants: channel
    } as IOption,
    {
      name: "Тип выхода канал CH3",
      default: 2,
      variants: channel
    } as IOption,
  ],
};
