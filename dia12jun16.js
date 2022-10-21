//************* Ejercicio de parentesis con pilas */

//Usa una pila (Stack) para revisar si un string cuenta con paréntesis balanceados.
//(), (()), ()(), (((()))) → Balanced
//)), ((), ((((()), ()()) → Not Balanced

//((())) -> Apertura 3 | Cierre 3 -> Balanceado
//)(()() -> Apertura 3 | Cierre 3 -> No balanceado

//((())) -> Contador 0
//)(()() -> Contador 1

//******************  Realizado con funciones costo O(n)*************
//function isBalanced (str){
//    if(str[0] !=="(" || str.length % 2 !== 0) return 'Not balanced'
//    let counter = 0
//    for(char in str){
//        if(str[char] ==="(") counter++
//        else if (str[char] && counter > 0) counter--
//    }
//    return counter===0 ? 'balanced' : 'Not balanced'
//}

//console.log(isBalanced("(()())"))

//***************** realizado con clases costo O(1) ****************

class Char{
    constructor(value){
        this.value = value
    }
}

class String{
    constructor(){
        this.total = 0
        this.data = []
        this.size = 0        
    }

    insert(value){
        let char = new Char 
        if(this.size === 0 && value==="("){
            this.total=1
            this.data.push(char)
        }else if(this.total >0 && value==="("){
            this.total--
            this.data.push(char)
        }else{
            this.total++
        }
        this.size++
    }
    
    validate(){
        return this.total===0 ? 'balanced' : 'Not balanced'
    }

}

let string = new String()
string.insert("(((())))")


//********** Documentación de la clase********************
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/in
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
//https://www.geeksforgeeks.org/stack-data-structure/?ref=gcse#design
//https://medium.com/swlh/stacks-and-queues-f281aa5462cf

