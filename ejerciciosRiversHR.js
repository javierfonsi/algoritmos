const plusMinus = (arr) => {
    let positivos = 0
    let negativos = 0
    let ceros  = 0

    for (let i= 0; i< arr.length; i++){
        if(arr[i]<0){
            negativos++
        }else if(arr[i]===0){
            ceros++
        }else{
            positivos++
        }
    }

    return ( (positivos/arr.length).toFixed(5) +  (negativos/arr.length).toFixed(5) +  (ceros/arr.length).toFixed(5) )

}

console.log(plusMinus([1, 1, 0, -1, -1]))