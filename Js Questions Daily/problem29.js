// largest element in the array using reduce method

let arr = [10,20,56,0,46,1222,32,6,5,8,41,98];

let result = arr.reduce((prev, curr)=>{
    if(prev>curr){
        return prev;
    }
    else{
        return curr;
    }
})

console.log(result);