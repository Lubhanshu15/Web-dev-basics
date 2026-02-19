// prompt the user to enter their full name. Gerante a username for them based on the input. Start username with @, followed by their full name and ending with the full name length.
// eg - username = "shradhakhapra" username should be "@shradhakhapra13"

let input = prompt("Enter you name to get the username : ");
let output = `@${input}${input.length}`;
alert(`Your username is ${output}`);