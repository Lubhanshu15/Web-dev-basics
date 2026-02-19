// create a game where you start with any random game number. Ask the user to keep guessing the number untill the user enters correct value.

/*let n = 65;
let input = prompt("Enter a number to take a guess");
if(input == n){
    alert("You guessed it correctly");
}
else{
    alert("Wrong guess");
}   */

// another method for keep guesing untill right use while loop
let n = 65;
let input = prompt("Enter a number to take a guess");
while(input != n){
    input = prompt("You entered a wrong number! guess again");
}
alert("YEEEEEEE you guessed it right it is  65   ");