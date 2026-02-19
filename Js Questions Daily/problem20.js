// create an array to store companies "bloomberg", "Microsoft", "Uber", "Google", "IBM","Netflix"

//a. Remove the first company from the array
// b. Remove  the uber and add ola in its place
// c. Add amazon at the end

let arr = ["bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(arr)
// task a
arr.shift()
console.log(arr)
//task b
arr.splice(1,1);
console.log(arr)
// task c
arr.push("Amazon")
console.log(arr)