// Ejemplo 1
const { performance } =  require('perf_hooks')
const linearSearch = (arr, n) =>{
    let t0 = performance.now()
    for(let i=0; i<arr.length; i++){
        if(n === arr[i]){
            result = arr[i]
        }
    }
    let t1 = performance.now()
    console.log(`La función tomó ${t1-t0} milisegundos en completarse`) 
    return -1
}

linearSearch([1,3,4,6,7,10], 1)

//Ejemplo 2