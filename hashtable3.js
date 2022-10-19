    class HashTable{
    constructor(size){
        this.data = new Array(size)
    }

    _hash(key){
        let hash = 0
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)*i)%this.data.length
        }
        return hash
    }

    set(key, value){
        const index = this._hash(key)
        let bucket = this.data[index]
        if(bucket && bucket.length>0){
            this.data[index].push([key, value])
        }else{
            this.data[index] = []
            this.data[index].push([key, value])
        }
    }

    get(key){
        const index = this._hash(key)
        let bucket = this.data[index]
        if(bucket && bucket.length>0){
            for(let i=0; i<bucket.length; i++){
                if(bucket[i][0]===key){
                    return bucket[i][1]
                }
            }
        }else{
            return undefined
        }
    }

    remove(key){
        const index = this._hash(key)
        let bucket = this.data[index]
        if(bucket && bucket.length>0){
            for (let i=0; i<bucket.length; i++){
                if(bucket[i][0]===key){
                    return this.data[index].splice(i,1)
                    //this.data[index].pop()
                }
            }
        }else{
            return undefined
        }
    }

}

const tabla = new HashTable(5)
console.log(tabla.set("name", "Javier Rodrigo "))
console.log(tabla.set("age", 37))
console.log(tabla.set("LastName", "Fonseca Leal"))
tabla.set("email", "javier_fonsi@hotmail.com")
tabla.set("password", "1234")
console.log(tabla.data)
//console.log(tabla.get("LastName"))
console.log(tabla.remove("LastName"))
//tabla.remove("name")
console.log(tabla.data)



