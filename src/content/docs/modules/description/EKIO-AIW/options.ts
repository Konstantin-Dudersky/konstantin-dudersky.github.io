import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "../../../../../components/Options.astro";

export const options_config: IOptionsConfig = {
  base_price: 0.0,
  options: [
    {
      name: "Количество каналов подключения тензодатчиков",
      default: 3,
      variants: [
        {
          name: "1",
          desc: "1 канал",
          price: 777,
        } as IOptionVariant,
        {
          name: "2",
          desc: "2 канала",
          price: 777,
        } as IOptionVariant,
        {
          name: "3",
          desc: "3 канала",
          price: 777,
        } as IOptionVariant,
        {
          name: "4",
          desc: "4 канала",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
  ],
};
