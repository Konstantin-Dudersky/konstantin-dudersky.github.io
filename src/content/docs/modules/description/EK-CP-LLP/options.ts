import type {
  IOptionsConfig,
  IOption,
  IOptionVariant,
} from "../../../../../components/Options.astro";

export const options_config: IOptionsConfig = {
  base_price: 14.8,
  options: [
    {
      name: "Тип контроллера",
      default: 1,
      variants: [
        {
          name: "LL",
          desc: "Luckfox Lyra",
          price: 777,
        } as IOptionVariant,
        {
          name: "LLP",
          desc: "Luckfox Lyra Plus",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Наличие интерфейса CAN1",
      default: 0,
      variants: [
        {
          name: "x",
          desc: "Без дополнительного интерфейса CAN1",
          price: 777,
        } as IOptionVariant,
        {
          name: "CAN1",
          desc: "С интерфейсом CAN1",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Наличие интерфейса UART1",
      default: 1,
      variants: [
        {
          name: "x",
          desc: "Без дополнительного интерфейса UART1",
          price: 777,
        } as IOptionVariant,
        {
          name: "UART1",
          desc: "С интерфейсом UART1",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Наличие интерфейса UART2",
      default: 0,
      variants: [
        {
          name: "x",
          desc: "Без дополнительного интерфейса UART2",
          price: 777,
        } as IOptionVariant,
        {
          name: "UART1",
          desc: "С интерфейсом UART2",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
    {
      name: "Наличие часов реального времени",
      default: 0,
      variants: [
        {
          name: "x",
          desc: "Без часов реального времени",
          price: 777,
        } as IOptionVariant,
        {
          name: "RTC",
          desc: "С часами реального времени",
          price: 777,
        } as IOptionVariant,
      ],
    } as IOption,
  ],

};
