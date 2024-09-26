// Bublee Recursion
/* function bubbleSort(arr){
    let n = arr.length;
    for (let i = 0; i < n; i++){
        for (let x = 0; x < n - i - 1; x++) {
            if (arr[x] > arr[x +1]){
               
                [arr[x], arr[x + 1]] = [arr[x + 1], arr[x]];
            }
        }
    }
    return arr;
}

let arr = [64, 34, 25, 16, 11, 22, 90, 98];
console.log("Array Ordenado:", bubbleSort(arr)); */

// no Recursion
function bubbleSort(arr){
  let n = arr.length;
  for(let i = 0; i < n; i++) {
    for(let x = 0; x < n - i - 1; x++) {
        if (arr[x] > arr [x + 1]) {
            [arr [x], arr [x + 1]] = [arr[x + 1], arr[x]];
        }
    }
  }
  return arr;
}
let ArrayDesordenado = [64, 34, 25, 16, 11, 22, 90, 98];
console.log ("Array original:", ArrayDesordenado);

let arrayOrdenado = bubbleSort(ArrayDesordenado);
console.log("Array ordenado:", arrayOrdenado);  
