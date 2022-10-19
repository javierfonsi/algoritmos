class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.nex = null
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    insert(value){
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++
    }

    traverse(){
        let values = []
        let currentNode = this.head
        while(currentNode){
            values.push(currentNode.value)
            currentNode = currentNode.next
        }
        return values
    }

    reverse(){
        let values = []
        let currentNode = this.tail
        while(currentNode){
            values.push(currentNode.value)
            currentNode = currentNode.prev
        }
        return values
    }

    deleteHead(){
        let deletedV = this.head.value
        this.head.prev = null
        this.head = this.head.next
        this.size--
        return deletedV
    }

    delete(index){
        if(!index && this.head){
            return this.deleteHead()
        }
        else if(index>=this.size){
            return index
        }
        if(index<this.size){
            let lastNode = this.getLastNode(index-1)
            let deletedValue = lastNode.next.value
            if(lastNode.next.next){
                let holdNodefollow = lastNode.next.next
                holdNodefollow.prev = lastNode
                lastNode.next=holdNodefollow
            }else{
                lastNode.next = null
                this.tail.prev= lastNode.prev
            }
            this.size--
            return deletedValue
        }
    }

    getLastNode(index){
        let counter = 0
        let currentNode = this.head
        while(counter < index){
            currentNode = currentNode.next
            counter++
        }
        console.log("Javier", currentNode)
        return currentNode
    }

}

let DList = new DoubleLinkedList()
DList.insert(7)
DList.insert(1)
DList.insert(10)
DList.insert(3)
console.log(DList.traverse())
console.log(DList.reverse())
//console.log(DList.delete())
console.log(DList.delete(3))
console.log(DList.delete(0))
console.log(DList.delete(0))
console.log(DList.traverse())
console.log(DList.delete())
console.log(DList.traverse())
console.log(DList.reverse())



//delete(index){
//    if(index < 0 || index > this.size){
//        return null
//    }
//    let  current = this.head
//    let previo = null
//    if(index === 0){
//        this.head = current.next
//        this.head.prev = null
//    }else{
//        for(let i = 0; i<index; i++){
//            console.log(i)
//            previo = current
//            current = current.next
//        }
//        previo.next = current.next
//    }
//    this.size--
//    return current.value
//}

