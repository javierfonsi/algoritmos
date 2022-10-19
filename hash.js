//class HashTable {
//    constructor(size){
//        this.data= new Array(size)
//    }

//    _hash(key){
//        let hash=0
//        for(let i=0; i<key.length; i++){
//            hash= (hash+ key.charCodeAt(i)*i) % this.data.length
//        }
//        return hash
//    }

//    set(key, value){
//        const index = this._hash(key)
//        if(!this.data[index]){
//            this.data[index]=[]
//        }
//        this.data[index].push([key, value])
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
//        }
//        return undefined
//    }

//    remove(key){
//        const index = this._hash(key)
//        let bucket = this.data[index]
//        if(bucket){
//            for(let i=0; i<bucket.length; i++){
//                if(bucket[i][0]===key){
//                    return bucket.splice(i,1)
//                }
//            }
//        }
//        return undefined
//    }
//}

//let table = new HashTable(5)
//table.set("Name", "Javier Rodrigo")
//table.set("Password", "1234")
//table.set("Email", "javier@gmail.com")
//table.set("School", "Braulio Gonzalez")
//console.log(table.get("Email"))
//console.log(table.data)
//console.log(table.remove("School"))
//console.log(table.data)


// Class array 

class Array{
    constructor(){
        this.data = {}
        this.size = 0
    }

    pop(value){
        this.data[this.size]=value
        this.size++
        return(this.size)
    }

    push(){
        const lastValue = this.data[this.size-1]
        delete this.data[this.size-1]
        this.size--
        return lastValue
    }
}

let arr = new Array()
console.log(arr.pop(5))
console.log(arr.pop(6))
console.log(arr.push())
console.log(arr.push())
console.log(arr.data)