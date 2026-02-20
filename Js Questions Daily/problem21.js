// functions

function myFunction(){ // definition of a function
    console.log("Hey this is myfunction and it shows how to define a function")
}
myFunction(); // Calling the function or invoking the function

// parameter in the function

function theFunction(greet){ // setting a parameter
    console.log(greet) // these parametes are local veriable or it consist local scope
}
theFunction("Good Morning!!!!") // argument for that parameter

//Arrow function these are the part of modern js 
const mul = (m,n)=>{
    return m*n;
}

let result = mul(6,3);
console.log(result);