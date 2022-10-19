//class HashTable{
//    constructor(size){
//        this.data = new Array (size)
//    }

//    _hash(key){
//        let hash = 0
//        for(let i=0; i<key.length; i++){
//            hash = (hash + key.charCodeAt(i) * i) % this.data.length
//        }
//        return hash
//    }

//    insert(key, value){
//        const index = this._hash(key)
//        if(!this.data[index]){
//            this.data[index]=[]
//        }this.data[index].push([key, value])
//    }

//    get(key){
//        const index = this._hash(key)
//        let bucket = this.data[index]
//        if(bucket){
//            for(let i=0; i<bucket.length; i++){
//                if(bucket[i][0]===key){
//                    return bucket[i][1]
//                }
//            }
//        }else{
//            return undefined
//        }
//    }

//    delete(key){
//        const index = this._hash(key)
//        let bucket = this.data[index]
//        if(bucket){
//            for(let i=0; i<bucket.length; i++){
//                if(bucket[i][0]===key){
//                    return bucket.splice(i,1)
//                }
//            }
//        }else{
//            return undefined
//        }
//    }
//}

//let table = new HashTable(5)
//table.insert("Name", "Javier")
//table.insert("Age", 37)
//table.insert("Password", 1234)
//table.insert("School", "Braulio Gonzalez")
////console.log(table.get("School"))
//console.log(table.get("Email"))
//console.log(table.delete("School"))
//console.log(table.data)

// class Array
//class Arreglo{
//    constructor(){
//        this.data={}
//        this.size=0
//    }

//    pop(value){
//        this.data[this.size]=value
//        this.size++
//        return this.size
//    }

//    push(){
//        let lastValue = this.data[this.size-1]
//        delete this.data[this.size-1]
//        this.size--
//        return lastValue
//    }
//}

//let arr = new Arreglo
//console.log(arr.pop(5))
//console.log(arr.pop(4))
//console.log(arr.pop(28))
//console.log(arr)
//console.log(arr.push())
//console.log(arr)

// Repaso single linked list clases academlo

//class Node{
//    constructor(value){
//        this.value=value
//        this.next=null
//    }
//}

//class LinkedList{
//    constructor(){
//        this.head=null
//        this.size=0
//    }

//    insert(value){
//        let newNode = new Node(value)
//        if(!this.head){
//            this.head = newNode
//        }else{
//            newNode.next = this.head
//            this.head=newNode
//        }
//        //this.size++
//        return this.size++
//    }

//    search(value){
//        let currentNode = this.head
//        while(currentNode){
//            if(currentNode.value===value) {
//                return true
//            }
//            currentNode=currentNode.next
//        }
//        return false
//    }

//    deleteHead(){
//        if(this.head){
//            this.head=this.head.next
//            this.size--
//            return this
//        }
//    }

//    delete(value){
//        let currentNode = this.head
//        if(currentNode.value===value){
//            return this.deleteHead()
//        }
//        while(currentNode){
//            if(currentNode.next && currentNode.next.value===value){
//                currentNode.next = currentNode.next.next
//                this.size--
//            }
//            currentNode=currentNode.next
//        }
//        return this.size
//    }

//    traverse(){
//        let values = []
//        let currentNode= this.head
//        while(currentNode){
//            values.push(currentNode.value)
//            currentNode=currentNode.next
//        }
//        return values
//    }
//}

//let lista = new LinkedList()
//console.log(lista.insert(5))
//console.log(lista)
//console.log(lista.insert(7))
//console.log(lista.insert(9))
//console.log(lista.search(5))
//console.log(lista.traverse(5))
//console.log(JSON.stringify(lista))
//console.log(lista.delete(9))
//console.log(lista.delete(5))
//console.log(JSON.stringify(lista))

// Repaso single linked list Platzi
//class Node{
//    constructor(value){
//        this.value = value
//        this.next = null
//    }
//}

//class SingleLinkedList{
//    constructor(value){
//        this.head={
//            value: value,
//            next: null
//        }
//        this.tail=this.head
//        this.size=1
//    }

//    preppend(value){
//        let newNode = new Node(value)
//        newNode.next = this.head
//        this.head = newNode
//        this.size++
//    }

//    append(value){
//        let newNode = new Node(value)
//        this.tail.next = newNode
//        this.tail= newNode
//        this.size++
//    }

//    insert(index, value){
//        if(index>=this.size){
//            return this.append(value)
//        }
//        else if(index===0){
//            return this.preppend(value)
//        }
//        let newNode = new Node(value)
//        let preNode = this.getIndex(index-1)
//        let holdNode = preNode.next
//        newNode.next=holdNode
//        preNode.next = newNode
//        this.size++
//    }

//    getIndex(index){
//        let counter = 0
//        let currentNode = this.head
//        while(counter<index){
//            currentNode=currentNode.next
//            counter++
//        }
//        return currentNode
//    }
//}

//let lista = new SingleLinkedList(10)
//lista.preppend(3)
//lista.append(7)
//console.log(JSON.stringify(lista))
//lista.insert(1,1)
//console.log(JSON.stringify(lista))


// double linked list academlo
