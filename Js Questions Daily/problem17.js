// Arrays

let marks = [10,30,6,56]; // basic syntax for defining an array
console.log(marks);
console.log(marks.length); // getting the length of an array
console.log(typeof(marks)); // the type of an array is obejct 
console.log(marks[2]); // accessing a value of a index of an array
marks[2] = 56; // modifying that value it shows that arrray is mutable
console.log(marks);

// looping over an array

for(i=0; i<marks.length; i++){
    console.log(marks[i]);
}

// using for of loop

for(let element of marks){
    console.log(element);
}

//Array methods
let arr = [10,30,6,56,32];
let arr2 = [20,70,9,36,82];
arr.push(203); // to add item in the end 
console.log(arr);
console.log(arr.pop()); // removes the item from the end
console.log(arr);
console.log(arr.toString()); // to convert the array into a string 
console.log(arr.concat(arr2)); // to concatinate two arrays
console.log(arr.unshift(555)); // add the item in the start of the array
console.log(arr);
console.log(arr.shift()); // removes the item from the start of the array
console.log(arr);

console.log(arr.slice(1,4)); // gives the piece of the array 

console.log(arr.splice(1,1)); // used to add or remove the things from the array
console.log(arr);
