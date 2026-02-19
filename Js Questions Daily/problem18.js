// For a given array with marks of students [85,97,44,37,76,60]. Find average marks of the entire class.

let marks = [85,97,44,37,76,60];
let sum = 0;
for (let i of marks){
    sum += i;
    
}
let average = sum/marks.length;
console.log(sum);
console.log(average);