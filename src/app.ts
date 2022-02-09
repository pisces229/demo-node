console.log('this is app');
import _ from 'lodash';

console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
// → { 'a': 1, 'b': 2 }
console.log(_.partition([1, 2, 3, 4], n => n % 2));
// → [[1, 3], [2, 4]]

// import { interval, Observable, shareReplay } from 'rxjs';
// const observable = new Observable(subscriber => {
//   subscriber.next("Hello,")
//   subscriber.next("My name is...")
//   subscriber.next("Linus :)")
//   subscriber.complete()
// });
// observable.subscribe({
//   next: x => {
//     console.log(x)
//   },
//     error: err => {
//     console.log("Error : "+err)
//   },
//   complete: () => {
//     console.log("Done...")
//   }
// });
// const source$ = interval(1000).pipe(
//   shareReplay(1)
// );
// source$.subscribe(data => {
//   console.log(`shareReplay 示範 第一次訂閱: ${data}`);
// });
// setTimeout(() => {
//   source$.subscribe(data => {
//     console.log(`shareReplay 示範 第二次訂閱: ${data}`);
//   });
// }, 5000);

const callback = (method: Function, value: string) => method(value);
callback((value) => console.log(`callback method:${ value }`), 'test');
