// Sum All Numbers in a Range
//We'll pass you an array of two numbers. 
//Return the sum of those two numbers and all numbers between them.

let arr1 = [1,4];
let arr2 = [4,1];
let arr3 = [5,10];
let arr4 = [10,5];

function sumAll(arr)  {
    let min = arr[0];
    let max = arr[1];
    if (min > arr[1]){
      min  = arr[1];
      max =  arr[0];
      // console.log(min, max);
    } 
    let sum = min;
    for (let i=min+1; i<=max; i++){
      sum += i;
    } 
    // console.log(sum);
    return sum;
  }

console.log(sumAll(arr1));
console.log(sumAll(arr2));
console.log(sumAll(arr3));
console.log(sumAll(arr4));


// --------------- second method -------------------- //
// let sumAll = arr => {
//   return sumArr =  arr.reduce((total, amount) => { 
//       let min = total;
//       let max = amount;
//       if(min > amount){ 
//         min = amount; max=total;
//       };
//       total += amount;
//       for(let i=min+1; i<max; i++){
//         total += i;
//       }
//       return total;
//   });
// }