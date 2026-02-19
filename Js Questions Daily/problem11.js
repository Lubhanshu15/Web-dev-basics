// loops in javascript

//1. for loop
for(let i=1; i<=5; i++){
    console.log("Lubhanshu Kawadkar");
}// in the loop the condition check itself until it gives false 

// 2. while loop
let j = 0;
while(j<=5){
    console.log("j");
    j++;
}

//3. do-while loop in this loop the execution-block will execute once after that checks the condition and then proceed
let m = 1;
do{
    console.log(m);
    m++;
}while(m<=10);

//4. for-of loop it helps to put loop on str or arrays
let str = "Lubhanshu"; 
for(let i of str){ // in this loop there is no need of updation or condition
    console.log(i);

}

//5. for-in loop same as for-of but for objects or arrays
let object = {
    username : "Lubhanshu",
    password : "123456",
    login : true
};

for(let k in object){  
    console.log(k); // it returns the key of the obejcts
    console.log(object[k]) // it returns the vlue of the key's
}