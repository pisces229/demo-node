import { interval, take, takeUntil, timer } from 'rxjs';
import { filter, firstValueFrom, lastValueFrom, map, of, reduce } from 'rxjs';
export default async () => {
  const doAdd = (value: number) => value + 1;
  const doFilter = (value: number) => value % 2 === 0;
  // 聲明式
  const result1 = [1, 2, 3, 4]
    .map(doAdd)
    .filter(doFilter)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(`聲明式:${result1}`);
  // 聲明式
  of(1, 2, 3, 4).pipe(
    map(doAdd),
    filter(doFilter),
    reduce((accumulator, currentValue) => accumulator + currentValue),
  ).subscribe(value => console.log(`聲明式(Observable):${value}`));
  // 指令式
  let result2 = 0;
  [1, 2, 3, 4].forEach(value => {
    const doAddResult = doAdd(value)
    if (doFilter(doAddResult)) {
      result2 += doAddResult;
    }
  });
  console.log(`指令式:${result2}`);
  // interval(2000).pipe(take(10));
  // interval(2000).pipe(takeUntil(timer(5000)));
  console.log(`firstValueFrom(of(1, 2, 3, 4)):${await firstValueFrom(of(1, 2, 3, 4))}`);
  console.log(`lastValueFrom(of(1, 2, 3, 4)):${await lastValueFrom(of(1, 2, 3, 4))}`);
  console.log(`firstValueFrom(interval(1000)):${await firstValueFrom(interval(1000))}`);
  console.log(`lastValueFrom(interval(1000)):${await lastValueFrom(interval(1000).pipe(take(5)))}`);
}
