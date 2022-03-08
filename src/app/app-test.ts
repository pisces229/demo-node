
export default () => {
  {
    class Something {
      private readonly value: string;
      constructor() {
        this.value = 'Constructor';
      }
      run(): void {
        const something = {
          value: 'Run',
          run1(): void {
            console.log(`run1:${this.value}`);
          },
          run2: () => console.log(`run2:${this.value}`)
        }
        something.run1();
        something.run2();
      }
    };
    new Something().run();
  }
  {
    const showMessage = (value) => `message:${value}.`;
    console.log(showMessage('abcd'));
  }
  {
    const value = { content: { a: '1', b: '2' } };
    const { content: { a } } = value;
    console.log(a);
    const { content } = value;
    console.log(content);
  }
  {
    const value = [ 1, 2, 3, 4, 5, 6 ];
    const [ a, b, c, d ] = value;
    console.log(a, b, c, d);
  }
  {
    const value = {
      name: 'mobile phone',
    };
    console.log({
      ...value,
      name: 'iPhone1',
    });
    console.log({
      name: 'iPhone2',
      ...value,
    });
  }
  {
    // console.log(1 != 1&&'AA');
    const counters = Array.from({ length: 14 }, (_, index) => index);
    console.log(counters);
  }
}
