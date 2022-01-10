// ------------- Bubble Sort ------------------ /

function bubbleSort(arr){
    let lengthArr = arr.length;
    for (let i=lengthArr-1; i>=0; i--){
        for (let j = 1; j<=i; j++){
            if (arr[j-1] > arr[j]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([7,5,2,4,3,9])); 
console.log(bubbleSort([9,7,5,4,3,1])); 
console.log(bubbleSort([1,2,3,4,5,6])); 
