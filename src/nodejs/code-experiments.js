import Stack from "./stack-object.js";
import baseConverter from "./base-converter.js";

console.log('Stack class');
let stack = new Stack()
stack.push(5)
stack.push(8)
console.log(stack.toString())

console.log();
console.log('Stack class leaking properties');
stack = new Stack()
console.log(Object.getOwnPropertyNames(stack))
console.log(Object.keys(stack))
console.log(stack.items)

console.log();
console.log('Stack class getOwnPropertySymbols');
let objectSymbol = Object.getOwnPropertySymbols(stack)
console.log(objectSymbol.length)
console.log(objectSymbol)
console.log(objectSymbol[0])
stack[objectSymbol[0]].push(1)
stack.toString()

console.log();
console.log('Base converter');
let converted = baseConverter(100, 6)
console.log(converted)