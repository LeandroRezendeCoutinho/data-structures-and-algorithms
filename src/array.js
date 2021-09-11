let daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

console.log(daysOfWeek.length);

for (let index = 0; index < daysOfWeek.length; index++) {
  const element = daysOfWeek[index];
  console.log(element);
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// inserindo na ultima posição
numbers[numbers.length] = 10
console.log(numbers);

numbers.push(11)
console.log(numbers);

numbers.push(12, 13)
console.log(numbers);

//inserindo na primeira posição
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value
}

numbers.insertFirstPosition(-1)
console.log(numbers);

numbers.unshift(-2)
console.log(numbers);

numbers.pop()
console.log(numbers);

//removendo o primeiro item
Array.prototype.reIndex = function (myArray) {
  const newArray = []
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i])
    }
  }
  return newArray
}

Array.prototype.removeFirstElement = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1]
  }
  return this.reIndex(this)
}

numbers = numbers.removeFirstElement()
console.log(numbers);

numbers.shift()
console.log(numbers);

//removendo 3 itens a partir do quinto
numbers.slice(5, 3)

//adicionando 3 numeros a partir do 5
numbers.slice(5, 0, 2, 3, 4)

console.log(numbers);

//concatenando arrays
const zero = 0
const positiveNumbers = [1, 2, 3]
const negativeNumbers = [-3, -2, -1]
numbers = negativeNumbers.concat(zero, positiveNumbers)

console.log(numbers);

const isEven = x => x % 2 === 0

// return false and stops on first because first is 1
let result = numbers.every(isEven)

// stops when find condition
result = numbers.some(isEven)

const mapped = numbers.map(isEven)

console.log(mapped)

const evenNumbers = numbers.filter(isEven)

console.log(evenNumbers);

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const reduced = numbers.reduce((previos, current) => previos + current)

console.log(reduced);

for (const n of numbers) {
  console.log(n % 2 === 0 ? 'even' : 'odd');
}

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers.toString())

// typed arrays

let length = 5
let int16 = new Int16Array(length)
let array16 = []
array16.length = length
for (let i = 0; i < length; i++) {
  int16[i] = i + 1
}
console.log(int16);
