// function secondLargest(arr){
//     const Uniquearr = Array.from(new Set(arr))
//     Uniquearr.sort((a,b) => {
//          return b-a
//         })
//         if(Uniquearr.length>=2){
//             return Uniquearr[1]
//         }else{
//             return -1
//         }
    

// }
// console.log(secondLargest([2,3,4,5,17]));

// optimized solution

function secondLargest(arr){
    let first = Number.NEGATIVE_INFINITY
    let second = Number.NEGATIVE_INFINITY

    for(let i=0; i<arr.length;i++){
        if(arr[i]>first){
            second = first
            first = arr[i]
    }

    else if (arr[i]>second && arr[i]!==first){
    second = arr[i]
}
    }
    return second === Number.NEGATIVE_INFINITY ? -1 : second
}
console.log(secondLargest([2,3,4,5,17])) // 5


