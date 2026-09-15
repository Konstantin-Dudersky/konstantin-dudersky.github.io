import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "../../../../../components/Options.astro";

const voltage: IOptionVariant[] = [
  { name: "x", desc: "Не устанавливать", price: 777 },
  { name: "5", desc: "5 В", price: 777 },
  { name: "9", desc: "9 В", price: 777 },
  { name: "12", desc: "12 В", price: 777 },
  { name: "24", desc: "24 В", price: 777 },
];


export const options_config: IOptionsConfig = {
  base_price: 14.8,
  options: [
    {
      name: "Напряжение для каналов CH0-CH7",
      default: 4,
      variants: voltage,
    } as IOption,
    {
      name: "Напряжение для каналов CH8-CH15",
      default: 4,
      variants: voltage,
    } as IOption,
    {
      name: "Напряжение для каналов CH16-CH23",
      default: 4,
      variants: voltage,
    } as IOption,
    {
      name: "Напряжение для каналов CH24-CH31",
      default: 4,
      variants: voltage,
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
  ],
};
