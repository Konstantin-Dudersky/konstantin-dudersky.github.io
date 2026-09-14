import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "@components/Options.astro";

const channelVariants: IOptionVariant[] = [
  {
    name: "x",
    desc: "Не использовать",
    price: 777,
  } as IOptionVariant,
  {
    name: "PT100",
    desc: "Датчик PT100",
    price: 777,
  } as IOptionVariant,
  {
    name: "PT1000",
    desc: "Датчик PT1000",
    price: 777,
  } as IOptionVariant,
];

export const options_config: IOptionsConfig = {
  base_price: 0.0,
  options: [
    {
      name: "Канал CH0 - тип датчика",
      default: 1,
      variants: channelVariants,
    } as IOption,
    {
      name: "Канал CH1 - тип датчика",
      default: 1,
      variants: channelVariants,
    } as IOption,
    {
      name: "Канал CH2 - тип датчика",
      default: 1,
      variants: channelVariants,
    } as IOption,
    {
      name: "Канал CH3 - тип датчика",
      default: 1,
      variants: channelVariants,
    } as IOption,
  ],
};
