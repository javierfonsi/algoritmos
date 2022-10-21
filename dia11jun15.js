//**********************Colas Queue ****************************/
// Estructura de datos en la que el primer elemento de la cola es el primero en salir FIFO -> First In First Out
//class Node{
//    constructor(value){
//        this.value=value
//        this.next=null
//    }
//}

//class Queue{
//    constructor(){
//        this.front = null
//        this.rear = null
//        this.size = 0
//    }

//    Enqueue(value){
//        let newNode = new Node(value)
//        if(!this.front){
//            this.front = newNode
//            this.rear = newNode
//        }else{
//            this.rear.next = newNode
//            this.rear = newNode
//        }
//        this.size++
//    }

//    Dequeue(){
//        if(this.front){
//            let lastFront = this.front.value
//            this.front = this.front.next
//            console.log(this.size)
//            if(this.size===1) this.rear=null
//            this.size--
//            return lastFront
//        }return new Error('There are not nodes until')
//    }

//}

//let cola = new Queue()
//cola.Enqueue(5)
//cola.Enqueue(7)
//cola.Enqueue(9)
//console.log(JSON.stringify(cola))
//console.log(cola.Dequeue())
//console.log(cola.Dequeue())
//console.log(JSON.stringify(cola))
//console.log(cola.Dequeue())
//console.log(cola.Dequeue())

//*************Colas usando previous  */

class Node{
    constructor(value){
        this.value=value
        this.prev=null
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value){
        let newNode = new Node(value)
        if(!this.front){
            this.front = newNode
            this.rear = newNode
        }else{
            this.rear.prev = newNode
            this.rear=newNode
        }
        this.size++
    }

    dequeue(){
        if(this.size>0){
            let lastFront = this.front.value
            this.front = this.front.prev
            this.size--
            if(this.size===0){
                this.rear=null
            }
            return lastFront
        }return new Error('There are not nodes')
    }
}


let cola = new Queue()
cola.enqueue(5)
cola.enqueue(7)
cola.enqueue(9)
console.log(JSON.stringify(cola))
cola.dequeue()
cola.dequeue()
cola.dequeue()
console.log(cola.dequeue())
console.log(JSON.stringify(cola))