import type { IAllOptions, IOption, IOptionVariant } from "./Options.astro";

const opt_1_8: IOptionVariant = {
  name: "8",
  desc: "8 каналов",
  price: 0,
};
const opt_1_16: IOptionVariant = {
  name: "16",
  desc: "16 каналов",
  price: 0,
};
const opt_1_24: IOptionVariant = {
  name: "24",
  desc: "24 канала",
  price: 0,
};
const opt_1_32: IOptionVariant = {
  name: "32",
  desc: "32 канала",
  price: 0,
};
const opt_1: IOption = {
  name: "Количество дискретных входов",
  variants: [opt_1_8, opt_1_16, opt_1_24, opt_1_32],
};

const opt_2_pnp: IOptionVariant = {
  name: "PNP",
  desc: "Схема подключения PNP",
  price: 0,
};
const opt_2_npn: IOptionVariant = {
  name: "NPN",
  desc: "Схема подключения NPN",
  price: 0,
};
const opt_2: IOption = {
  name: "Схема подключения входов",
  variants: [opt_2_pnp, opt_2_npn],
};

export const config: IAllOptions = {
  base_price: 14.8,
  options: [opt_1, opt_2],
};
