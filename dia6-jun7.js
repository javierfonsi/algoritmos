//------------ Fuerza bruta costo O(n^2)---------
//--Permutation mean that all elements in the str1 are in diferent order in the str2
//function isPermutation (j1, j2){
//    if(j1.length === j2.length){
//        //let s1= Array.from(j1)
//        let s2= Array.from(j2)
//        //console.log(s2)
//        //console.log(j2)

//        for(i=0; i<j1.length; i++){
//            for(let j=0; j<j1.length; j++){
//                if(j1[i] === s2[j]){
//                    s2.splice(j,1)
//                }
//                console.log(j1[i], j2[j])
//                console.log(j1[i], s2[j])
//                console.log(s2)
//            }
//        }
//        if(s2.length===0){
//            return true
//        }
//    }
//    return false
//}

str1= "abc" 
str2= "cbc" 
//console.log(isPermutation(str1, str2))

//------------- Optimized permutation coste O(n)
//function ispermutationOptimized(x, y){
//    if(x.length === y.length){
//        let allX = {}
//        for(ele in x){
//            allX[x[ele]] = true
//        }
//        console.log(allX)
        
//        for(ele in y){
//            if(allX[y[ele]]===true){
//                allX[y[ele]]=false
//            }
//        }
//        console.log(allX)

//        for(ele in x){
//            if(allX[x[ele]]===true){
//                return false
//            }        
//        }
//        return true

//    }return false
//}

//console.log(ispermutationOptimized("abc", "cab"))

// This funtion allow verify if the chars in string are unique
//function unique(x){
//    let a = []
//    let b = []
//    for(let i=0; i<x.length; i++){
//        a.push(x[i])
//    }
//    //console.log(a)
//    b = [...new Set(a)]
//    console.log(b)
//    return x.length === b.length ? true: false

//}

//console.log(unique('abcb'))

//This funtion return true if the string x and y are iquals
//function permutation(a,b){
//    if(a.length===b.length){

//        let counter = 0
//        let obj = {}
//        for(let i=0; i<a.length; i++){
//            obj[a[i]] = 0
//        }
//        console.log(obj)
        
//        for(let i=0; i<b.length; i++){
//            if(b[i] in obj){
//            counter++
//            }
//        }
    
//    return counter === a.length ? true : false
//    } 
//    return false


//}
//const x = "abc"
//const y = "cbc"
//console.log(permutation(x,y))

//function perrmutation(a,b){
//    let j = []
//    for(let i=0; i<a.length; i++){
//        j.push(a[i])
//    }
//    //console.log(j)
//    //console.log(j.sort())
//    const n1 = a.split("").sort().join("")
//    const n2 = b.split("").sort().join("")
//    console.log(n2, n1)
//    if(n1 !== n2){
//        return false
//    }
//            return true
//}

//const x = "zalo"
//const y = "aloH"

//console.log(perrmutation(x,y))

// constructor de arreglos
//class Array {
//    constructor(){
//        this.size=0
//        this.data={}
//    }

//    push(value){
//        this.data[this.size]=value
//        this.size++
//        return this.size
//    }

//    pop(){
//            const value = this.data[this.size-1]
//            delete this.data[this.size-1]
//            this.size --
//            return value
//    }
//}

//let arr = new Array
//console.log(arr.push(5))
//console.log(arr.push(6))
//console.log(arr.data)

//console.log(arr.push(6))
//console.log(arr.pop())

//let array =[]
//Array.prototype.academlo = 'Hola mundo'
//Array.prototype.upperCase = function(){
//    for(let i=0; i<this.length; i++){
//        this[i]=this[i].toUpperCase()
//    }
//} 
//let letters = ['a', 'b', 'c']
//letters.upperCase()
//console.log(letters)
//console.log(Array.prototype.academlo)


























