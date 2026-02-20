// filter method for array 

let arr = [10,20,56,0,46,32,6,5,8,41,98];

let newarray = arr.filter((val)=>{
    return val%2 === 0;
});

console.log(newarray);
