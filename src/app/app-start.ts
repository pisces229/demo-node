export default () => {
  // boolean
  {
    const createFalseBoolean: boolean = Boolean(0);
    const createTrueBoolean: boolean = Boolean(1);
  }
  // number
  {
    const createDecimalLiteral: number = 6;
    const createHexadecimalLiteral: number = 0xf00d;
    const createBinaryLiteral: number = 0b1010;
    const createOctalLiteral: number = 0o744;
    const createNanNumber: number = NaN;
    const createInfinityNumber: number = Infinity;
  }
  // string
  {
    const create: string = 'Hello';
  }
  // undefined
  {
    const create: undefined = undefined;
  }
  // null
  {
    const create: null = null;
  }
  // any
  {
    const create: any = 'seven';
  }
  // Union Types
  {
    let create: string | number;
    create = 'seven';
    create = 7;
  }
  // Interface
  {
    const create: IPerson = {
      id: 1,
      name: 'Tom',
      age: 25,
    };
  }
  // Array
  {
    // const create: Array<T> = [1, 1, 2, 3, 5];
    const create: number[] = [1, 1, 2, 3, 5];
    create.push(8);
  }
  // Type Assertion
  {
    const create: string = 'abc' as string;
  }
  {
    const createError: Error = new Error('Error occurred');
    const createDate: Date = new Date();
    const createRegExp: RegExp = /[a-z]/;
  }
  {
    type create = string;
    const a: create = '1';
  }
  {
    type create = 'click' | 'scroll' | 'mousemove';
    let a: create = 'click';
    a = 'scroll';
  }
  {
    const create: [string, number] = ['Tom', 25];
    create[0] = '1';
    create[1] = 1;
  }
  // enum
  {
    enum create {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
    // enum create {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
    const a: number = create.Sun;
    const b: string = create[0];
  }
  {
    const a = new Person('Jack');
    console.log(a.name); // Jack
    // a.name = 'Tom';
  }
  {
    const cat = new Cat('Tom');
  }
  reverse(1);
  reverse('2');
}
interface IPerson {
  readonly id: number;
  name: string;
  age: number;
}
// tslint:disable-next-line: max-classes-per-file
class Person {
  public readonly name: string;
  public constructor(name: string) {
      this.name = name;
  }
}
// tslint:disable-next-line: max-classes-per-file
abstract class Animal {
  public name: string;
  public constructor(name: string) {
      this.name = name;
  }
  public abstract sayHi(): void;
}
// tslint:disable-next-line: max-classes-per-file
class Cat extends Animal {
  public sayHi() {
      console.log(`Meow, My name is ${this.name}`);
  }
}
// tslint:disable-next-line: max-classes-per-file
interface Alarm {
  alert() :void;
}
// tslint:disable-next-line: max-classes-per-file
class Door {
}
// tslint:disable-next-line: max-classes-per-file
class SecurityDoor extends Door implements Alarm {
  alert() {
      console.log('SecurityDoor alert');
  }
}
// tslint:disable-next-line: max-classes-per-file
class Car implements Alarm {
  alert() {
      console.log('Car alert');
  }
}
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// function reverse(x: number): number;
// function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// merge interface
interface MergeInterface {
  price: number;
}
interface MergeInterface {
  weight: number;
}
// tslint:disable-next-line: no-namespace
namespace CreateNamespace {
  // ....
}

// extends
interface FirstExtends {
  id: number;
  name: string;
}
interface SecondExtends extends FirstExtends {
  enable: boolean;
  run: () => void;
}
type ExtendsType = SecondExtends;
// Pick
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };
// type FirstPick = Pick<SecondExtends, 'id'>;
type FirstPick = Pick<FirstExtends, 'id' | 'name'>;
type SecondPick = Pick<FirstExtends, 'id'>['id'];
// type SecondPick = Pick<SecondExtends, 'id' | 'name'>['id'];
interface KeyofPick {
  id: number;
};
// type ThirdPick = Pick<FirstExtends, keyof KeyofPick>;
type ThirdPick =  Pick<Pick<FirstExtends, 'id' | 'name'>, 'id'>;

// Omit
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type FirstOmit = Omit<FirstExtends, 'id'>;
type SecondOmit = Omit<FirstExtends, 'id'>['name'];
interface KeyofOmit {
  enable: boolean;
  run: () => void;
};
// type ThirdOmit = Omit<SecondExtends, keyof KeyofOmit>;
type ThirdOmit = Omit<Omit<SecondExtends, 'id'>, 'name'>;

// type / interface
type Alias = { num: number };
// type A = {}; type B = {}; type C = A & B;
interface Interface {
  num: number;
};
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
