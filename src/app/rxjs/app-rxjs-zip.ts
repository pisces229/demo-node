import { Subject, zip } from "rxjs";
export default () => {
  const subject1 = new Subject<string>();
  const subject2 = new Subject<string>();
  const observable1$ = subject1.asObservable();
  const observable2$ = subject2.asObservable();
  zip(observable1$, observable2$).subscribe(value => console.log(value));
  subject1.next('1:A');
  subject1.next('1:B');
  subject2.next('2:A');
}
