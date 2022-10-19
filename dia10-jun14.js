//pilas

class Stack{
    constructor(length){
        this.data = []
        this.top = null
        this.size = 0
        this.maxSize = length
    }

    push(value){
        if(this.data.length < this.maxSize){
            this.data[this.size] = value
            this.size++
            this.top=value
        }else{
            return new Error('The stack is full.')
        }
    }

    pop(){
        let lastTop = this.top
        if(this.size>0){
            this.data.splice(this.size-1,1)
            let currentValue= this.data
            this.size--
            this.top = this.data[this.size-1]
            return lastTop
        }
    }
}

let pila = new Stack(5)
console.log(pila.push(11))
console.log(pila.push(13))
console.log(pila.push(15))
console.log(pila.push(17))
console.log(pila.push(18))
console.log(pila.push(20))
console.log(pila)
console.log(pila.pop())
console.log(pila.pop())
console.log(pila.pop())
console.log(pila.pop())
//console.log(pila.pop())
console.log(pila)
console.log(pila.pop())
console.log(pila)



































//class Stack{
//    constructor(length){
//        this.data = []
//        this.top = null
//        this.size = 0
//        this.maxSize = length
//    }

//    push(value){
//        if(this.data.length < this.maxSize){
//            this.data.push(value)
//            this.top = value
//            this.size++
//            return this.data
//        }
//        return new Error('La pila esta llena')
//    }
//}

//const stack = new Stack(5)
//stack.push(5)
//stack.push(3)
//stack.push(2)
//stack.push(1)
//stack.push(7)
//console.log(stack.data)
