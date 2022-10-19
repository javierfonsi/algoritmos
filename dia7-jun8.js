//Resumen clases modulo algoritmos

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
        //this.tail=null
    }

    insert(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    search(value){
        let currentNode= this.head
        while(currentNode){
            if(currentNode.value===value){
                return true
            }
            currentNode=currentNode.next
        }
        return false
    }

    traverse(){
        let values = []
        let currentNode = this.head
        while(currentNode){
            values.push(currentNode.value)
            currentNode=currentNode.next            
        }
        return values
    }

    delete(value){
        let currentNode = this.head
        if(currentNode.value===value){
            this.head=currentNode.next
            this.size--
            return
        }
        while(currentNode){
            if(currentNode.next && currentNode.next.value===value){
                currentNode.next = currentNode.next.next
                this.size--
            }
            currentNode=currentNode.next
        }
        return value
    }

    deleteD(){
        let prev = this.head
        let temp = this.head

        while(temp){
            if(temp.value !== prev.value){
                prev.next = temp
                prev = temp
                this.size--
            }
            temp=temp.next
        }
        if(prev !== temp){
            prev.next = null
        }
    }

}

const Linked = new LinkedList()
Linked.insert(5)
Linked.insert(5)
Linked.insert(5)
Linked.insert(12)
Linked.insert(15)
Linked.insert(15)
Linked.insert(20)
console.log(JSON.stringify(Linked))
console.log(Linked.search(30))
console.log(Linked.traverse())
console.log(Linked.delete(40))
Linked.deleteD()
console.log(Linked.head)
console.log(JSON.stringify(Linked))

//Version de listas enlazadas simples PLATZI
//class Node{
//    constructor(value){
//        this.value=value
//        this.next=null
//    }
//}

//class LinkedList {
//    constructor(value){
//        this.head = {
//            value: value,
//            next: null,
//        }
//        this.tail = this.head
//        this.size=1
//    }

//    append(value){
//        let newNode = new Node(value)
//        this.tail.next = newNode
//        this.tail = newNode
//        this.size++
//        return this.size
//    }

//    preppend(value){
//        let newNode = new Node(value)
//        newNode.next = this.head
//        this.head = newNode
//        this.size++
//        return
//    }

//    insert(index, value){
//        if(index>=this.size){
//            return this.append(value)
//        }
//        if(index===0){
//            return this.preppend(value)
//        }
//        let newNode = new Node(value)
//        let prevNode = this.getIndex(index-1)
//        let holdNode = prevNode.next
//        newNode.next = holdNode
//        prevNode.next = newNode
//        this.size++
//    }

//    getIndex(index){
//        let counter=0
//        let currentNode=this.head
//        while(counter<index){
//            currentNode = currentNode.next
//            counter++
//        }
//        return currentNode
//    }
//}


//let list = new LinkedList(10)
//list.append(7)
//list.preppend(3)
////list.preppend(10)
//list.insert(2,1)
//console.log(JSON.stringify(list))

//        const newNode = new Node(value)
//        let prevNode = this.getIndex(index-1)
//        let holdnode = prevNode.next
//        newNode.next = holdnode
//        prevNode.next = newNode
//        this.length++
//        return this
//    }

//    getIndex(index){
//        let headEvaluate = this.head
//        let counter = 0
//        while(counter<index){
//            counter++
//            headEvaluate = headEvaluate.next
//        }
//        return headEvaluate
//    }





//class Node{
//    constructor(value){
//        this.value = value
//        this.next = null
//    }
//}

//class LinkedList{
//    constructor(){
//        this.head = null
//        this.tail = null
//        this.size = 0
//    }

//    insert(value){
//        let newNode = new Node(value)
//        if(!this.head){
//            this.head = newNode
//            this.tail= this.head
//        }else{
//            newNode.next = this.head
//            this.head = newNode
//        }this.size++

//    }

//    append(value){
//        let newNode = new Node(value)
//        //console.log(this.tail)
//        if(!this.tail){
//            this.tail.next = newNode
//        }else{
//            this.tail.next = newNode
//            this.tail = this.tail.next
//        }
//        this.size++
//    }
//}

//let lista = new LinkedList()
////lista.insert(7)
//lista.insert(1)
//lista.insert(10)
//lista.insert(3)
////lista.append(7)
//console.log(JSON.stringify(lista))

// Version del profesor de platzi

//class Node{
//    constructor(value){
//        this.value = value
//        this.next = null
//    }
//}


//class LinkendList{
//    constructor(value){
//        this.head = {
//            value: value,
//            next: null
//        }
//        this.tail = this.head
//        this.length =1
//    }

//    append(value){ // add to tail
//        const newNode = new Node(value)
//        this.tail.next = newNode
//        this.tail = newNode
//        this.length++
//    }

//    preppend(value){ // add to head
//        const newNode = new Node(value)
//        newNode.next = this.head
//        this.head=newNode
//        this.length++
//    }
    //insert(index, value) { //index posistion or in the tail
    //    if(index===0){
    //        return this.preppend(value)
    //    }
    //    if(index>=this.length){
    //        return this.append(value)
    //    }
    //    let newNode = new Node(value)
    //    const prevPosition = this._getIndex(index-1)
    //    const currentPosistion = prevPosition.next
    //    prevPosition.next = newNode
    //    newNode.next= currentPosistion
    //    this.length++
    //    return this
    //}
    //_getIndex(index){
    //    let counter = 0
    //    let currentNode = this.head
    //    while(counter !== index){
    //        currentNode = currentNode.next
    //        counter++
    //    }
    //    return currentNode
    //}

//    insert(index, value){
//        if(index===0){
//            return this.preppend(value)
//        }
//        if(index>=this.length){
//            return this.append(value)
//        }
//        const newNode = new Node(value)
//        let prevNode = this.getIndex(index-1)
//        let holdnode = prevNode.next
//        newNode.next = holdnode
//        prevNode.next = newNode
//        this.length++
//        return this
//    }

//    getIndex(index){
//        let headEvaluate = this.head
//        let counter = 0
//        while(counter<index){
//            counter++
//            headEvaluate = headEvaluate.next
//        }
//        return headEvaluate
//    }
//}

//let lista = new LinkendList(10)

////lista.append(1)
//lista.preppend(3)
//lista.append(7)
//lista.insert(2,1)
//console.log(JSON.stringify(lista))

//Double linked list academlo
//class Node{
//    constructor(value){
//        this.value = value
//        this.next = null
//        this.prev = null
//    }
//}

//class DoubleLinkedList{
//    constructor(){
//        this.head = null
//        this.tail = null
//        this.size = 0
//    }

//    insert(value){
//        let newNode = new Node(value)
//        if(this.size===0){
//            this.tail = newNode
//            this.head = newNode
//        }else{
//            newNode.next = this.head
//            this.head.prev = newNode
//            this.head = newNode
//        }
//        this.size++
//    }

//    traverse(){
//        let values = []
//        let currentNode = this.head
//        while(currentNode){
//            values.push(currentNode.value)
//            currentNode = currentNode.next
//        }
//        return values
//    }

//    reverse(){
//        let values = []
//        let currentNode = this.tail
//        while(currentNode){
//            values.push(currentNode.value)
//            currentNode = currentNode.prev
//        }
//        return values
//    }
//}

//let DList = new DoubleLinkedList()
//DList.insert(7)
//DList.insert(1)
//console.log(DList.head)
//console.log(DList.traverse())
//console.log(DList.reverse())