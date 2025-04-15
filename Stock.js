// function maxProfit(prices){
//     let profit = 0 
//     for(let i=0; i<prices.length-1;i++){
//         for(let j = i+1; j<prices.length;j++){
//             const currentProfit = prices[j]-prices[i]
//             if(currentProfit>profit){
//                 profit = currentProfit
//             }
//         }
//     }
//     return profit
// }
// console.log(maxProfit([5,4,3,2,1])) // 5;

function maxProfit(prices){
    let profit = 0;
    let minPrice = prices[0]

    for(let i = 1 ; i<prices.length;i++){
        if(prices[i]<minPrice){
            minPrice = prices[i]
        }
        guessProfit = prices[i]-minPrice

        profit= Math.max(profit,guessProfit)
    }
    return profit
}
console.log(maxProfit([7,1,5,3,6,4])) // 5;