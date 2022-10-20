

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Stack{
    constructor(){
        this.top = null
        this.bottom = null
        this.size = 0
    }

    peek(){
        return this.top
    }

    push(value){
        let newNode = new Node(value)
        if(!this.top){
            this.top=newNode
            this.bottom=newNode
        }else{
            this.top.next = newNode
            this.top = newNode
        }
        this.size++
    }

    pop(){
        //let lastTop = this.top.value
        let fromBottom = this.bottom
        if(this.size===0){
            return undefined
        }
        let lastTop = this.top.value
        if(this.size===1){
            this.top=null
            this.bottom=null
            this.size--
            return lastTop
        }
        while(fromBottom){
            if(fromBottom.next && !fromBottom.next.next){
                fromBottom.next=null
                this.top = fromBottom
                this.size--
            }
            fromBottom=fromBottom.next
        }
        return lastTop
    }

}            //this.data.pop()

let stack = new Stack()
stack.push(11)
stack.push(12)
stack.push(15)
stack.push(18)
console.log(stack.peek())
console.log(JSON.stringify(stack))
console.log(stack.pop())
console.log(JSON.stringify(stack))
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(JSON.stringify(stack))
console.log(stack.pop())
console.log(stack.pop())









