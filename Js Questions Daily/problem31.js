// take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce mathod to calculate sum of all numbers in the array. use the reduce method to calulate product of all numbers in the array.
// use inspect and console tab in the browser to see the result
let input = prompt("Enter a number to get from 1 to that number and product of all that numbers : ")
let arr = [];
for(let i = 1; i<=input; i++){
    arr.push(i);
};
let sum = arr.reduce((res,cur)=>{
    return res+cur;
});


let product = arr.reduce((res,cur)=>{
    return res*cur;
});
console.log("The sum is : ", sum," THe product is : ", product);
