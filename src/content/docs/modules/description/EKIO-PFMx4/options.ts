import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "@components/Options.astro";

export const options_config: IOptionsConfig = {
  base_price: 777,
  options: [
    {
      name: "Напряжение сигнала ЧИМ",
      default: 1,
      variants: [
        {
          name: "3V3",
          desc: "3,3 В",
          price: 777,
        } as IOptionVariant,
        {
          name: "5V",
          desc: "5 В",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
  ],
};
