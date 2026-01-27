// write a simple program for creating a variable in JavaScript

//method 01
let age = 25; // let - Dynamically typed Variable  age - variable name    25 - variabel value 
console.log(age); // let is Block-scoped variable means between the brackets 
// reassignment is possible in let but redefinition is not possible 
{
    let b = "lubhanshu";
    console.log(b)
}
//console.log(b)

  
//method 02
var age2 = 18; // we have stopped to use var for creating variable using var because of function scoped access of the variables and we can declare it everytime globally it can backfire us in debugging 
// reassignment is possible in var and redefinition is also possible 
console.log(age2);


//method 03
const age3 =20; // constant typed variable 
console.log(age3); // reassignment is not possible in var and redefinition is also not possible 