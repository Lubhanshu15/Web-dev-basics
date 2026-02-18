// these are non primitive data types

// first 1. Objects

const student = {
    fullname : "Lubhanshu",
    age : 19,
    Cgpa : 8.20
};

console.log(student)
console.log(typeof(student))
console.log(student["fullname"]) // to access a particular key of the object
console.log(student.age)// this is also a way to acess a key of an object

student["age"] = 25;
console.log(student.age) // to update any value of any key
