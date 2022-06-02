import { interval } from 'rxjs';

export default () => {
  // DemoSomething();
  // DemoDestructuringAssignment();
  // DemoSubject();
  DemoSubjectRun();
}
const DemoSomething = () => {
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
};
const DemoDestructuringAssignment = () => {
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
};
const DemoSubject = () => {
  let subject: ((value: string) => void)[] = [];
  const subjectPush = (callback: (value: string) => void) => {
    subject.push(callback);
  };
  const subjectRun = (value: string) => {
    console.log('subjectRun before');
    subject.forEach(callback => callback(value));
    // subject.map(callback => callback(value));
    console.log('subjectRun after');
    subject = [];
  };
  setTimeout(() => {
    subjectPush((value) => console.log('1', value));
    subjectPush((value) => console.log('2', value));
    subjectRun('1');
  }, 1000);
  setTimeout(() => {
    subjectPush((value) => console.log('3', value));
    subjectPush((value) => console.log('4', value));
    subjectRun('2');
  }, 1000);
};
const DemoSubjectRun = () => {
  const subject: ((value: number) => void)[] = [];
  let pushCount = 0;
  let runCount = 0;
  const subjectPush = (callback: (value: number) => void) => {
    subject.push(callback);
  };
  const subjectRun = (value: number) => {
    console.log('subjectRun before');
    subject.forEach(callback => callback(value));
    // subject.map(callback => callback(value));
    console.log('subjectRun after');
    subject.length = 0;
  };
  setInterval(() => subjectPush((value: number) => console.log(++pushCount, value)), 100);
  setInterval(() => subjectRun(++runCount), 3000);
};
