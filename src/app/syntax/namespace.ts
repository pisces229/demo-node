namespace Namespace1 {
  export const run = () => {
    console.log('Namespace1');;
  }

  export interface User 
  {
    porperty1: string;
  }
}
namespace Namespace1 {
  export interface User 
  {
    porperty1: string;
    porperty2: string;
  }
}
namespace Namespace2 {
  export const run = () => {
    console.log('Namespace2');;
  }

  export interface User 
  {
    porperty2: string;
  }
}

const user1 : Namespace1.User = {
  porperty1: '',
  porperty2: '',
}

Namespace1.run();

const user2 : Namespace2.User = {
  porperty2: '',
}

Namespace2.run();
