// string in js

let str = "Lubhanshu"; // decleration of the string 
console.log(str.length); // string length property to get the length of any of the string
console.log(str[0]); // THis is to access any index of the string 

//template literal

let output = `Here is my name ${str}`;
console.log(output)


// string methods

let string = " Lubhanshu";
console.log(string.toLowerCase());// returns lowercase
console.log(string.toUpperCase());// returns uppercase
console.log(string.trim());// removes the whitespaces from starting and end 
console.log(string.slice(1,5)); // returns the part of the string from the index start to end
console.log(string.concat(str)); // returns the concatinating string 
console.log(string.replace('L','M'));// returns the string with L replaced with M
console.log(string.charAt(5)); // returns char for that particular index
