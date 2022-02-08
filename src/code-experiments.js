import Stack from "./stack-object.js";


let stack = new Stack()
stack.push(5)
stack.push(8)
console.log(stack.toString())

stack = new Stack()
console.log(Object.getOwnPropertyNames(stack))
console.log(Object.keys(stack))
console.log(stack.items)

let objectSymbol = Object.getOwnPropertySymbols(stack)
console.log(objectSymbol.length)
console.log(objectSymbol)
console.log(objectSymbol[0])
stack[objectSymbol[0]].push(1)
stack.toString()