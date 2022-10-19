function solution(A) {
    let max = A[0];
    for(let i=1; i<A.length; i++){
        if(max < A[i]){
            max=A[i]
        }
    }
    return max
        
}


let value = [1,-2, 0, 9, -1, -2]

console.log(solution(value));