// write a code which can give grades to students according to their scores:
/* 90-100 A
   70-89  B
   60-69  C
   50-59   D
   0-49    F
   */

let marks = 50;
if(marks<=100 && marks>=90){
    console.log("Grade is A");
}
else if(marks<=89 && marks>=70){
    console.log("Grade is B");
}
else if(marks<=69 && marks>=60){
    console.log("Grade is C");
}
else if(marks<=59 && marks>=50){
    console.log("Grade is D");
}
else{
    console.log("Grade is F");
}