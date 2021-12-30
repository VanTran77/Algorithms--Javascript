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