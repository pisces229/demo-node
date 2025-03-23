
function toArray<T>(v: Iterable<T>): T[]
function toArray<T>(v: Array<T>): T[]
{
  return [...v]
}

console.log(toArray(new Set(["apple", "banana", "cherry"])))
console.log(toArray(new Array("apple", "banana", "cherry")))