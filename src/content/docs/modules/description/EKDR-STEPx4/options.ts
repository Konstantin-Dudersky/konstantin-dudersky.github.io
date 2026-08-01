import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "@components/Options.astro";



export const options_config: IOptionsConfig = {
  base_price: 14.8,
  options: [
    {
      name: "Количество подключаемых двигателей",
      default: 3,
      variants: [
        { name: "1", desc: "1 двигатель", price: 777 },
        { name: "2", desc: "2 двигателя", price: 777 },
        { name: "3", desc: "3 двигателя", price: 777 },
        { name: "4", desc: "4 двигателя", price: 777 },
      ],
    } as IOption,
  ],
};
