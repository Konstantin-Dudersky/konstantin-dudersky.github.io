// Пример использования type для определения структуры пользователя
export type User = {
  name: string;
  price: number;
  email: string;
};

// Пример использования алиаса
export const newUser: User = {
  name: "Анна",
  price: 28,
  email: "anna@example.com",
};

export const options: User[] = [
  { name: "Иван", price: 30, email: "ivan@example.com" },
  { name: "Мария", price: 25, email: "maria@example.com" },
];
