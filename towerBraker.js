const towerBraker = (arr) => {
    let juegos = +arr[0]
    let result = [] 
    let end = 0 
    console.log(juegos)
    if(juegos === arr.length-1){
        let allpieces = []
        let n
        let m
        for(let i=1; i<arr.length; i++){
            n = arr[i][0]
            m = arr[i][1]
            allpieces.push(n*m)
        }
        for(let i= 0; i<allpieces.length; i++){
            
            if(allpieces[i]%2===0 ){
                end = 1
                result.push(end) 
            }else if( n%2!==0){
                end = 1
                result.push(end) 
            }else{
                end = 2
                result.push(end)
            }
            
        }
    }
    return result
}

console.log(towerBraker([[2], [2,2], [1,4]]))