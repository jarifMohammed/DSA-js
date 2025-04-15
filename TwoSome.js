// const twoSome = function(nums,target){
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 return [i,]
//             }
//         }
//     }
//     return [i,j]
// }
// console.log(twoSome([2,7,11,15],9)) // [0,1];

const twoSum = function(nums, target) {

    let obj ={};

    for(let i= 0 ; i<nums.length;i++){
        let n = nums[i];

        if(obj[target-n]>=0){
            return[obj[target-n],i]
        }else{
            obj[n]= i;
        }
    }
}