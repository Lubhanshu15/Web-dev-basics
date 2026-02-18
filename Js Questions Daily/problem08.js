// conditional statement

// if statement 
let age = 20;
if(age > 18){ // if is the primary condition the operation under the if statement only execute when it fullfile the condition and it check everytime
    console.log("You are eligible")
}

// if-else statement 
let age2 = 18;
if(age2 > 18){ 
    console.log("You can vote")
}
else{ // only execute when if is false
    console.log("You can not vote")
}

// else-if statement 
let percentage = 65 
// for checking multiple conditions 
if(percentage > 80){
    console.log("Grade is A")
}
else if(percentage<80 && percentage>60){
    console.log("Grade is B")
}
else{
    console.log("Grade is C")
}

// ternary operator 
// this is a cool method for checking a condition with true and false condition 
let age5 = 25;
let result = age5>18 ? "adult" : "not adult"; // this operator is a compact version of if-else
console.log(result);