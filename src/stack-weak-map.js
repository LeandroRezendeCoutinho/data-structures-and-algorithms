const items = WeakMap()

class Stack {
    constructor() {
        items.set(this, [])
    }

    push(element) {
        items.get(this).push(element)
    }

    pop() {
        const s = items.get(this)
        const r = s.pop()
        return r
    }
}