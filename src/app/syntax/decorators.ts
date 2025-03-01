// {
//   "compilerOptions": {
//     "experimentalDecorators": true
//   }
// }

// General Decorator
const GeneralDecorator = (constructor: Function) => {
  console.log('General Decorator')
}
// Factory Decorator 
const FactoryDecorator = (input: string) => {
  console.log('Factory Decorator Input', input)
  return (constructor: Function) => {
    console.log('Factory Decorator')
  }
}

// Class Decorator
const DecoratorsClass = (constructor: Function) => {
  console.log('Class Decorator:', constructor)
  constructor.prototype.name = 'constructor'
}

// Method Decorator / Accessor Decorator
const DecoratorsMehtod = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  console.log('Method Decorator:', target, propertyKey, descriptor)
  const originalMethod = descriptor.value
  descriptor.value = function (...args: any[]) {
      console.log(`Method Decorator Calling [${propertyKey}] with args:[${args}]`)
      const result = originalMethod.apply(this, args)
      return result
  };
}

// Property Decorator
const DecoratorsProperty = (target: any, propertyKey: string) => {
  console.log('Property Decorator:', target, propertyKey)
  let propertyValue = target[propertyKey];
  const getter = () => {
    console.log(`Property Decorator Getter: ${propertyKey} => ${propertyValue}`);
    return propertyValue;
  }
  const setter = (value: any) => {
    console.log(`Property Decorator Setter: ${propertyKey} => ${value}`);
    propertyValue = value;
  }

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
  })
}

// Parameter Decorator
const DecoratorParameter = (target: any, propertyKey: string, parameterIndex: number) => {
  console.log(`Parameter Decorator:`, target, propertyKey, parameterIndex)
}

@GeneralDecorator
@FactoryDecorator('Factory')
@DecoratorsClass
class Target {
  @DecoratorsProperty
  name: string
  constructor() {
    console.log('Target.constructor')
  }
  @DecoratorsMehtod
  run(@DecoratorParameter p1: string, @DecoratorParameter p2: string) {
    console.log('Target.run')
    return { p1, p2 }
  }
}

export default () =>
{
  // const target = new Target()
  // target.run('p1','p2')
  // target.name
  // target.name = 'modify'
}