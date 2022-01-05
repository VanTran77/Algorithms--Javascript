// -------------------- method 4 ----------------------------- //
let array = [[40, 5, 1, 3], [20, 10, 22, 19, 50], [113, 200, 118, 26], [32, 335, 37, 39], [100, 1001, 8555, 1]];
function findMax(arr){
    //creat empty array for show result
    let result = []
    //a for loop for going to inside of main array 
    for (let i = 0; i < arr.length; i++) {
        //find max number in each index of main array 
        let max = Math.max.apply(null,arr[i])
        //add max number in each index to result array  
        result.push(max)
    }
    console.log(result);
}
findMax(array)
// ----------------------------------------------------------- //
// -------------------- method 3 ----------------------------- //
let array = [[40, 5, 1, 3], [20, 10, 22, 19, 50], [113, 200, 118, 26], [32, 335, 37, 39], [100, 1001, 8555, 1]];
function findMax(arr) {
    //creat empty array for show result
    let result = []
    //a for loop for going to inside of main array 
    for (let i = 0; i < arr.length; i++) {
        // we are going to sort each index of array 
        let sort = arr[i].sort(function(a, b){return a - b}) ;
        //add max number in result array 
        result.push(sort[sort.length-1])
    }
    console.log(result)
}
// ------------------------------------------------------------//
// -------------------- method 2 ----------------------------- //
let array = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(array[0]);
var result = [];
function largestOfFour(x){
    for (var s=0; s<x.length; s++){
        result.push(largestOf1Array(x[s]));
    }
    return result;
    // console.log(result);
    }
    
function largestOf1Array(arr){
    var max = arr[0];
    for(i=0; i<arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max;
    console.log(max);
}
largestOfFour(array);
console.log(result);

// -------------------------------------------//

// -----------  method 1 ---------------------//
// var arr1 = [4, 5, 1, 3];
// var arr2 = [13, 27, 18, 26];
// var arr3 = [32, 35, 37, 39];
// var arr4 = [1000, 1001, 857, 1];
// var arrayX = [];
// function largestOfFour(a1, a2, a3, a4){
//     function largestNum(arr){
//         var max = arr[0];
//         for(i=0; i<arr.length; i++){
//             if (max < arr[i]){
//                 max = arr[i];
//             }
//         }
//         return max;
//         console.log(max);
//     }
//     arrayX = [largestNum(a1), largestNum(a2), largestNum(a3), largestNum(a4)];
//     return arrayX;
// }

// largestOfFour(arr1, arr2, arr3, arr4);
// console.log(arrayX);