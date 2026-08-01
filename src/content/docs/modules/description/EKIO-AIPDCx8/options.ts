import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "@components/Options.astro";

const maxCurrent: IOptionVariant[] = [
  { name: "x", desc: "Не устанавливать", price: 777 },
  { name: "0.4", desc: "До 0,4 А", price: 777 },
  { name: "0.8", desc: "До 0,8 А", price: 777 },
  { name: "1.5", desc: "До 1,6 А", price: 777 },
  { name: "2.5", desc: "До 2,5 А", price: 777 },
  { name: "5", desc: "До 5 А", price: 777 },
];

export const options_config: IOptionsConfig = {
  base_price: 0.0,
  options: [
    {
      name: "Максимальный ток канала CH0",
      default: 5,
      variants: maxCurrent,
    } as IOption,
    {
      name: "Максимальный ток канала CH1",
      default: 5,
      variants: maxCurrent,
    } as IOption,
    {
      name: "Максимальный ток канала CH2",
      default: 5,
      variants: maxCurrent,
    } as IOption,
    {
      name: "Максимальный ток канала CH3",
      default: 5,
      variants: maxCurrent,
    } as IOption,
    {
      name: "Максимальный ток канала CH4",
      default: 5,
      variants: maxCurrent,
    } as IOption,
    {
      name: "Максимальный ток канала CH5",
      default: 5,
      variants: maxCurrent,
    } as IOption,
    {
      name: "Максимальный ток канала CH6",
      default: 5,
      variants: maxCurrent,
    } as IOption,
    {
      name: "Максимальный ток канала CH7",
      default: 5,
      variants: maxCurrent,
    } as IOption,
  ],
};
