// reduce method for arrays

let arr = [10,20,56,0,46,32,6,5,8,41,98];

let arr2 = arr.reduce((res,cur)=>{
    return res+cur;
});

console.log(arr2);