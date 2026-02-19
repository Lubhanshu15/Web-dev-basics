// for a given array with prices of 5 items [250,645,300,900,50]. All items have an offer of 10% off on them. change the array to store the final price after appplying offer.

let rootArray = [250,645,300,900,50];
let updatedArray = [];
let updatedValue = 0;
for(let i of rootArray){
    updatedValue = i - (i*0.1);
    updatedArray.push(updatedValue);
}
console.log(updatedArray)

//method 02
for(let j = 0; j<rootArray.length; j++){
    let offer = rootArray[j]/10;
    rootArray[j] -= offer;
}

console.log(rootArray)