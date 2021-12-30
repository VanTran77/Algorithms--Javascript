// Number to String
let arrayX = [2, -1, 3, -6, -9, 34, -8, 33];
function Nums2Str(arrayX){
    for (let i = 0; i <= arrayX.length; i++){
        if(arrayX[i] < 0){
            arrayX[i] = 'turing';
        }
    }
    console.log("New array: ", arrayX);
}
Nums2Str(arrayX);

// // Eliminate the Negatives
// let X = [2, -1, 3, -6, -9, 34, -8, 33];
// function removeNeg(X){
//     for (let i = 0; i <= X.length; i++){
//         if(X[i] < 0){
//             X[i] = 0;
//         }
//     }
//     console.log("New array: ", X);
// }
// removeNeg(X);

// the average value of all elements in the array
// let arrV = [2,1,3,9,5];
// function aVerage(aarV){
//     let sum = 0;
//     for (let i = 0; i < arrV.length; i++){
//         sum = sum + aarV[i]; 
//     }
//     console.log("Average: ", sum/arrV.length);
// }
// aVerage(arrV)

// // find the maximum value of the array
// let arrX = [2, 4, 6, -3, 7, 23, -27, 9];
// function MaxValue(arrX){
//     let max = arrX[0]; 
//     for(let i = 0; i < arrX.length; i++){
//         if (max < arrX[i]) { 
//             max = arrX[i];
//         }    
//     }
//     console.log("The maximum value of the array is", max);
// }
// MaxValue(arrX);

//print the elements of an array
// let arrX = [2, 4, 6, -3, 7, 23];
// function printEleOfArr(arrX){
//     for(let i = 0; i < arrX.length; i++){
//         console.log(arrX[i]);
//     }
// }
// // printEleOfArr(arrX);


// // print number: 1-135 & Sum 
// function printNumsSum(nums){
//     let sum = 0;
//     for (let i = 0; i <= nums; i++){
//          sum = sum + i;
//             console.log(`Number is ${i} and Sum is ${sum}`);
//     }
// } 
// printNumsSum(135);

// Print ODD Numbers:
// function printODD(nums){
//     for (let i = 1; i <= nums; i++){
//         if (i%2 !== 0) {
//         console.log("ODD is ", i);
//         }
//     }
// } 
// printODD(135);

// print number: 1 - 135 
// function printNums(nums){
//     for (let i = 1; i <= nums; i++){
//         console.log("Number ", i);
//     }
// } 
// printNums(135);
