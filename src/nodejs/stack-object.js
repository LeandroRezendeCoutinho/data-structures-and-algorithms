const _items = Symbol('stackItems')

class Stack {
  constructor() {
    this.count = 0
    this[_items] = []
  }

  push(element) {
    this[_items][this.count] = element
    this.count++
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const result = this[_items][this.count]
    delete this[_items][this.count]
    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this[_items][this.count - 1]
  }

  clear() {
    this.count = 0
    this[_items] = {}
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this[_items][0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this[_items][i]} `
    }
    return objString
  }
}

export default Stack
