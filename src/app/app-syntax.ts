
// import ImportFirst1 from './syntax/import-first'
// import ImportFirst2 from './syntax/import-first'
// export default () => {
//   // console.log(Value)
//   ImportFirst1()
//   ImportFirst2()
// }
import execute from './syntax/decorators'

export default () => {
  execute()

  const v0 : Record<string, string> = {}
  v0['a'] = ''
  v0['b'] = ''
  const ss : keyof typeof v0 = 'c';
  

  const key: keyof {
    name: string;
    age: number;
    address: string;
  } = 'name'

  const v1 = <string[]>Object.keys(v0)
  const v2 = v1.reduce((privious, current) => {
    privious[current] = current
    return privious;
  }, <Record<string, string>>{})

  console.log(v0, v1, v2)

}
