import { concat, of } from "rxjs";
export default () => {
  const observable1$ = of(1, 2, 3);
  const observable2$ = of(4, 5, 6);
  const observable$ = concat(observable1$, observable2$);
  observable$.subscribe(value => console.log(value));
}
