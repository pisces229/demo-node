
type Constant = {
  Record: Record<string, string>
}
type GlobalThis = {
  Constant: Constant
}
// global type (it's work)
declare global {
  let Constant: Constant
  let GlobalThis: GlobalThis
}


// Frontend (unknow)
declare global {
  interface Window {
    Constant: Constant
  }
}
// Backend (unknow)
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


export {};
