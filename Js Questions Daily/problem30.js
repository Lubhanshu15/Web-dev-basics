// We are given array of marks of students filter out of th emarks of students that scored 90+.

let arr = [10,20,56,0,46,96,32,6,5,8,41,98];

let newarray = arr.filter((val)=>{
    return val>90;
});

console.log(newarray);