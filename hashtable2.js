class HashTable{
    constructor(size){
        this.data = new Array(size)
    }

    _hash(key){
        let hash = 0
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)*i)% this.data.length
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
            for(let i=0; i<bucket.length; i++){
                if(bucket[i][0]===key){
                    return this.data[index].splice(i,1)
                }
            }
        }
        else{
            return undefined
        }
    }
}

let table = new HashTable(5)
table.set("Name", "Javier Rodrigo")
table.set("image", "http://academlo")
table.set("email", "info@academlo.com")
table.set("password", "academlo1234")

table.set("LastName", "Fonseca Leal")
//table.set("Age", 37)
//table.set("School", "Braulio Gonzalez")
//table.set("University", "Santo Tomas")
//table.set("Wife", "Johana Paola")

console.log(table.data)
//console.log(table.get("LastName"))
console.log(table.remove("LastName"))
console.log(table.data)
//console.log(table.get("Age"))



