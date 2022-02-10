let packname = 'Pack';
let age: number = 5;
let existsFlag = true;
let favoriteLang: string;
let langs = ['Javascript', 'Ruby', 'Python']
favoriteLang = langs[0]

// duck typing
interface Person {
  name: string
  age: number
}

function printName(person: Person) {
  console.log(person.name);
}

const john = { name: 'John', age: 21 }
const mary = { name: 'Mary', age: 21, phone: '123-456789' }

printName(john)
printName(mary)

// interface
interface Comparable {
  compareTo(b): number
}

class MyObject implements Comparable {
  age: number
  compareTo(b): number {
    if (this.age === b.age) {
      return 0
    }

    return this.age > b.age ? 1 : -1
  }
}

//generics
interface GenericComparable<T> {
  compareTo(b: T): number
}

class MyOtherObject implements GenericComparable<MyOtherObject> {
  age: number
  compareTo(b: MyOtherObject): number {
    if (this.age === b.age) {
      return 0
    }

    return this.age > b.age ? 1 : -1
  }
}