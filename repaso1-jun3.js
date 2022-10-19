//function ispermutation(a,b){
//    x=a.length
//    y=b.length
//    let obj = {}
//    if(x===y){
//        for(each in a){//s erecorre el los elementos del string a
//            obj[a[each]]=1 //Se agregan los elementos del string "a" a un objeto con el valor 1, no olvidar que es valido colocar cualquier valor o asignación            
//        }
//        console.log(obj)
//        let same=0
//        for(el in b ) if(b[el] in obj) same++ //Se recorren los elementos del string b, si el elemento esta en obj se incrementa same en 1
//        if(same===y) return true  //si la cantidad de coincidencias es igual a la cantidad de elementos del string "y" retorna true, en caso contrario retorna false
//    }
//        return false
//}

//a='dog'
//b='god'
//console.log( ispermutation(a,b))


function isUnique(a){
    let b=[]
    let c=[]

    for(el in a) {
        b.push(a[el])
    }
    //console.log(b)
    c = [...new Set(b)]
    //console.log(b, c)
    b.length === c.length ? console.log(true) :  console.log(false)
}

const ele = "12341"
isUnique(ele)