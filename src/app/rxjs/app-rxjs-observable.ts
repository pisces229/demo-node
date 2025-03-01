import { concat, interval, Observable, of, shareReplay, } from "rxjs";
export default () => {
  const observable = new Observable(subscriber => {
    subscriber.next("Hello,")
    subscriber.next("My name is...")
    subscriber.next("Linus :)")
    subscriber.complete()
  });
  observable.subscribe({
    next: x => {
      console.log(x)
    },
      error: err => {
      console.log("Error : "+err)
    },
    complete: () => {
      console.log("Done...")
    }
  });

  const source$ = interval(1000).pipe(
    shareReplay(1)
  );
  source$.subscribe(data => {
    console.log(`shareReplay 示範 第一次訂閱: ${data}`);
  });
  setTimeout(() => {
    source$.subscribe(data => {
      console.log(`shareReplay 示範 第二次訂閱: ${data}`);
    });
  }, 5000);
}

