
type Constant = {
  Record: Record<string, string>
}

declare global {
  let Constant: Constant
}
// Frontend
declare global {
  interface Window {
    Constant: Constant
  }
}
// Backend
declare module global {
  type Constant = {
    Record: Record<string, string>
  }
}
declare global {
  namespace NodeJS {
    interface global {
      Constant: Constant
    }
    interface globalThis {
      Constant: Constant
    }
  }
}

declare module 'some-js-lib' {
  export function doSomething(): string;
}

export {};
