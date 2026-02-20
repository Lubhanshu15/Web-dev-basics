// for each function for array 

let arr = [10,20,56,0,46,32,6,5,8,41,98];

arr.forEach(function printVal(val){
    console.log(val);
    
});

arr.forEach((element , idx , arr)=> {
    console.log(element,idx,arr);
});