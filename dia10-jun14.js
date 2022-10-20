//***********stack with array academlo********************

//class Stack{
//    constructor(length){
//        this.data = []
//        this.top = null
//        this.size = 0
//        this.maxSize = length
//    }

//    push(value){
//        if(this.data.length < this.maxSize){
//            this.data[this.size] = value
//            this.size++
//            this.top=value
//        }else{
//            return new Error('The stack is full.')
//        }
//    }

//    //------------------Metodo realizado en clase de-----------------
//    //pop(){
//    //    let lastTop = this.data.pop()
//    //    if(this.size-1 > 0){
//    //        this.size--
//    //        this.top = this.data[this.size-1]
//    //        return lastTop
//    //    }else{
//    //        this.top = null
//    //        this.size = 0
//    //    }
//    //    return lastTop
//    //} 
//    //----------------------------------------------------------------
    
//    //----------Funciona correctamente-----------
//    pop(){
//    ////    //if(!this.top) return new Error('There are not values until')
//        if(!this.top) return undefined
//        let lastTop = this.data.pop()
//        this.size--
//        this.top = this.data[this.size-1]
//        if(this.size===0) this.top=null
//        return lastTop
//    }
//    //-------------------------------------------

//    //----------Funciona correctamente-----------
//    //pop(){
//    //    let lastTop = this.data.pop()
//    //    if(this.size>0){
//    //        this.size--
//    //        this.top = this.data[this.size-1]
//    //        if(this.size===0){
//    //            this.top=null
//    //        }
//    //        return lastTop
//    //    }else{
//    //        return new Error('There are not elements')
//    //    }
//    //}
//    //-------------------------------------------

//    isFull(){
//        return this.size === this.maxSize //forma correcta de retornar un true
//        //return this.size === this.maxSize ? true: false //A pesar que tambien funciona no es adecuado
//        //if(this.size===this.maxSize){
//        //    return true    
//        //} 
//        //return false        
//    }

//    isEmpty(){
//        return this.size === 0  // Forma correcta de returnar el true
//        //return this.size === 0 ? true : false //A pesar que tambien funciona no es adecuado
//    }

//}

//let pila = new Stack(5)
//console.log(pila.push(11))
//console.log(pila.push(13))
//console.log(pila.push(15))
//console.log(pila.push(17))
//console.log(pila.push(18))
//console.log(pila.push(20))
//console.log(pila.pop())
//console.log(pila.pop())
//console.log(pila.pop())
//console.log(pila.pop())
//console.log(pila.pop())
//console.log(pila)
//console.log(pila.isFull())
//console.log(pila.isEmpty())
//console.log(pila)
//console.log(pila.pop())
//console.log(pila.pop())
//console.log(pila)
//console.log(pila.pop())
//console.log(pila)



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//***********stack with linked list academlo********************
//class Node{
//    constructor(value){
//        this.value = value
//        this.next = null
//    }
//}

//class Stack{
//    constructor(maxSize){
//        this.maxSize = maxSize
//        this.top = null
//        this.size = 0 
//    }

//    push(value){
//        if(this.size >= this.maxSize) return new Error('The stack is full')
//        let newNode = new Node(value)
//        if(!this.size){
//            this.top=newNode
//        }else{
//            newNode.next = this.top
//            this.top=newNode
//        }
//        this.size++
//    }

//    pop(){
//        //if(this.size===0) return new Error('There are not nodes until')
//        if(this.top) {
//            let lastTop = this.top.value
//            this.top = this.top.next
//            this.size--
//            return lastTop
//        }
//        return new Error('There are not nodes until')

//    }

//    isEmpty(){
//        return this.size===0
//    }

//    isFull(){
//        return this.size===this.maxSize
//    }

//    peek(){
//        return this.top.value
//    }
//}

//let stack = new Stack(3)
//stack.push(50)
//stack.push(40)
//stack.push(30)
////console.log(stack.pop())
//console.log(stack)
////console.log(stack.push(20))
//console.log(stack.isEmpty())
//console.log(stack.peek())
//console.log(stack.isFull())

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//************* Ejercicio de parentesis con pilas */

//Usa una pila (Stack) para revisar si un string cuenta con paréntesis balanceados.
//(), (()), ()(), (((()))) → Balanced
//)), ((), ((((()), ()()) → Not Balanced

//((())) -> Apertura 3 | Cierre 3 -> Balanceado
//)(()() -> Apertura 3 | Cierre 3 -> No balanceado

//((())) -> Contador 0
//)(()() -> Contador 1

class Node{
    constructor(){
    }
}

class Balance{
    constructor(char){
        this.top=null
        this.size=char.length
    }
}










