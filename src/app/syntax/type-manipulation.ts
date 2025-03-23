import { partial } from "lodash";

{
  const execute = <Type>(arg: Type): Type => {
    return arg;
  }
  const r1 = execute(0);
  const r2 = execute('0');
  const r3 = execute({});
}
{
  const execute = <Type extends string>(arg: Type): Type => {
    return arg;
  }
  // const r1 = execute(0);
  const r2 = execute<string>('0');
}
{
  const execute = <Type, Key extends keyof Type>(obj: Type, key: Key) => {
    return obj[key];
  }
  const x = { a: 1, b: 2, c: 3, d: 4 };
  execute(x, "a");
  // execute(x, "x");
}
{
  interface Contravariant<in T> {
    in: (arg: T) => void
    // out(): T
  }
  interface Covariant<out T> {
    // in: (arg: T) => void
    out(): T
  }
  interface Invariant<in out T> {
    in: (arg: T) => void
    out(): T
  }
}