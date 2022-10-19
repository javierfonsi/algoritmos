//dado un arreglo de enteros positivos y un entero K, cuenta todos los pares distintos cuya diferencia sea igual a k
//--------------------------Desarrollo fuerz bruta---------------------------
//Desarrollo de fuerza bruta precio O(n^2)
//a= [3, 4, 1, 5, 7, 2 ]
//k = 5

//function paresOptimize(arr, n){
//    const size = arr.length
//    let counter = 0
//    let hashTable = {}

//    for(let i= 0; i<size; i++){
//        hashTable[arr[i]]=true
//        //console.log(hashTable)
//    }

//    for(let j=0; j<size; j++){
//        let x = arr[j]
//        if( hashTable[x+n]){

//            counter++
//            console.log(x, hashTable[x+n])
//        }
//        hashTable[j] = false
//    }
//    console.log(hashTable)
//    return counter


//}

//console.log(paresOptimize(a, k))

//function counterPair(arr, n){
//    const size = arr.length
//    let total = 0
//    for(let i=0; i<size; i++){
//        for(let j=i+1; j<size; j++){
//            if(arr[i] - arr[j] === n || arr[j]-arr[i]===n || arr[j] + arr[i]===n){
//                total+=1
//            }
//        }
//    }
//    return total
//}
//console.log(counterPair(a, k))

//--------------------------Desarrollo optimizado con hashTable---------------------------
//Desarrollo con hashTable {}
a= [-3, 9, 1, 6, 7, 2 ]
k = 5
function counterPairOptimized(arr, n){
        let size = arr.length
        let total = 0
        let hashTable = {}

    for(let i=0; i<size; i++){
        hashTable[arr[i]]=true
    }
    
    //console.log(hashTable)
    for(let i=0; i<size; i++){
        let x = arr[i]
        if(x-n >=0 && hashTable[x-n]){
            total++
            console.log(x)
        }
        else if(hashTable[x+n]){
            total++
            //console.log(x)
        }
        hashTable[x]=false        
        console.log(hashTable)
    }
    return total
}


console.log(counterPairOptimized(a, k))
//--------------------------Desarrollo optimizado con hashTable---------------------------
//function countPairsOptimize(arr, k) {
//    let n = arr.length;
//    let count = 0;
//    let hashTable = {};
  
//    for (let i = 0; i < n; i++) {
//      //O(n)
//      hashTable[arr[i]] = true;
//    }
  
//    for (let j = 0; j < n; j++) {
//      //O(n)
//      let x = arr[j];
  
//      if (x - k >= 0 && hashTable[x - k]) {
//        console.log(x, x - k);
//        count++;
//      } else if (hashTable[x + k]) {
//        console.log(x, x + k);
//        count++;
//      }
//      hashTable[x] = false;
//    }
  
//    return count;
//  }
//  //O(n+n) -> O(2n) -> O(n)
  
//  console.log(countPairsOptimize(a, k));