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
    name: "Pt-100",
    desc: "Датчик Pt-100",
    price: 777,
  } as IOptionVariant,
  {
    name: "Pt-1000",
    desc: "Датчик Pt-1000",
    price: 777,
  } as IOptionVariant,
  {
    name: "Cu-100",
    desc: "Датчик Cu-100",
    price: 777,
  } as IOptionVariant,
  {
    name: "Cu-1000",
    desc: "Датчик Cu-1000",
    price: 777,
  } as IOptionVariant,
  {
    name: "Ni-100",
    desc: "Датчик Ni-100",
    price: 777,
  } as IOptionVariant,
  {
    name: "Ni-120",
    desc: "Датчик Ni-120",
    price: 777,
  } as IOptionVariant,
  {
    name: "Ni-1000",
    desc: "Датчик Ni-1000",
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
