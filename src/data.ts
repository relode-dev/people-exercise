export type Person = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export const people: Person[] = [
  {
    firstName: "Alice",
    lastName: "Atwood",
    email: "alice.atwood@email.com",
    phone: "123-456-7890",
  },
  {
    firstName: "Bob",
    lastName: "Bertrand",
    email: "bertrand@email.com",
    phone: "234-456-7899",
  },
];
