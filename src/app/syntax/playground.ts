type Person = { age: number; name: string; alive: boolean };

type NumericKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

type NumProps = NumericKeys<Person> // "age"


type ExcludeKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type FilteredPerson = ExcludeKeys<Person, "name">;
type FilteredKeys = keyof FilteredPerson; // "age" | "alive"