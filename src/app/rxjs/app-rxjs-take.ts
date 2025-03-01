import { of, Subject, switchMap, take, tap } from "rxjs";

export default () => {
  const subject: Subject<string> = new Subject<string>();
  subject.subscribe((value) => console.log('subject', value));
  subject.pipe(
    tap((value: string) => console.log('1 tap', value)),
    take(1),
    switchMap((value: string) => {
      return of(value);
    }),
  ).subscribe((value) => console.log('1', value));
  subject.next('1');
  subject.pipe(
    tap((value: string) => console.log('2 tap', value)),
    take(1),
    switchMap((value: string) => {
      return of(value);
    })
  ).subscribe((value) => console.log('2', value));
  subject.next('2');
  subject.complete();
}
