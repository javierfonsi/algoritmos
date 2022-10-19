class HashTable{
    constructor(size){
        this.data= new Array(size)
    }

    _hash(key){
        let hash = 0
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i)*i) % this.data.length
        }
        return hash
    }

    set(key, value){
        const index = this._hash(key)
        if(!this.data[index]){
            this.data[index]=[]
        }
        this.data[index].push([key,value])
    }

    get(key){
        const index = this._hash(key)
        let bucket= this.data[index]
        if(bucket){
            for(let i=0; i<bucket.length;i++){
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
        let bucket= this.data[index]
        if(bucket){
            for(let i=0; i<bucket.length; i++){
                if(bucket[i][0]===key){
                    return bucket.splice(i,1)
                }
            }
        }
        return undefined
    }
}

const table = new HashTable(5)
table.set('Name', 'Rivers')
//table.set('Name', 'Rodrigo')
//table.set('Age', 27)
table.set('School', "Politecnico de Puebla")
table.set('Email', 'rivers@gmail.com')
table.set('password', 'Rivers1234')
console.log(table.data)
//console.log(table.get('Age'))
console.log(table.get('Name'))
console.log(table.remove('Name'))
console.log(table.data)
