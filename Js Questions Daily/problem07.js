// Operators in Js

//1. Arithmetic Operators
let a = 5;
let b = 10;
console.log("a = ", a, " and b = ", b);
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a / b = ", a/b);
console.log("a * b = ", a*b);
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b);

// 2. Unary operators 
a++;  // increment operator it increases value by 1
console.log(a);
b--;  // decrement operator it decreases value by 1
console.log(b);

// ++a is a preincrement like it first changes the value then work and a++ is postincrement like it first works after that changes the value
let c = 10;
console.log("++c = ", ++c);
console.log("c++ = ", c++);
console.log(c)

// --a is a predecrement like it first changes the value then work and a-- is postdecrement like it first works after that changes the value
console.log("++c = ", ++c);
console.log("c++ = ", c++);
console.log(c)

// 3. Assignment Operators

a += 5; // it will be a = a + 5
console.log(a)
a -= 5; // it will be a = a - 5
console.log(a)
a *= 5; // it will be a = a * 5
console.log(a)
a **= 5; // it will be a = a ** 5
console.log(a)
a %= 2; // it will be a = a % 5
console.log(a)

// 4. Comparision Operator

let x = 10;
let y = 9;

console.log("a == b", a == b);
console.log("a === b", a === b); // three === for stricted checking with datatype also
console.log("a != b", a != b);
console.log("a !== b", a !== b);
console.log("a >= b", a >= b);
console.log("a > b", a > b);
console.log("a < b", a < b);
console.log("a <= b", a <= b);


// 5.logical operators

let n = 10;
let m = 5;

let cond1 = n>m;
let cond2 = n<m;

console.log(cond1 && cond2); // both should be true for returning true 
console.log(cond1 || cond2); // at least one should be true for returning ture
console.log(!cond1); // return opposite