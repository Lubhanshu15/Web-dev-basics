// create a function using the "function" keyword that takes a string as an arguent & returns the number of vowels in the string.
// after that create an arrow function which will do this same task.
function vowelCount(a){
    let b =[]
    let c;
    for(let i =0; i<a.length; i++){
        if(a[i]=="a" ||a[i]=="e" ||a[i]=="i" ||a[i]=="o" ||a[i]=="u" || a[i]=="A" ||a[i]=="E" ||a[i]=="I" ||a[i]=="O" ||a[i]=="U"){
            b.push(a[i]);
        }
    }
    console.log("Number of vowels in the string : ", b.length);
}

vowelCount("aeIou");

// using arrow function 

const count = (x)=>{
    let b =[]
    for(let i =0; i<x.length; i++){
        if(x[i]=="a" ||x[i]=="e" ||x[i]=="i" ||x[i]=="o" ||x[i]=="u" || x[i]=="A" ||x[i]=="E" ||x[i]=="I" ||x[i]=="O" ||x[i]=="U"){
            b.push(x[i]);
        }
    }
    console.log("Number of vowels in the string : ", b.length);

}
count("Lubhanshu");