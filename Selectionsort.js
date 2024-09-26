  // Selection sort  recursiva y no recursiva
function selectionSortRecursive(arr, startIndex = 0) {
    if (startIndex >= arr.length - 1) {
        return arr;
    }

    let minIndex = startIndex;
    for (let i = startIndex + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
          minIndex = i;
        }
      }
      if (minIndex !== startIndex) {
        [arr[startIndex], arr[minIndex]] = [arr[minIndex], arr[startIndex]];
      }
      return selectionSortRecursive(arr, startIndex + 1);
}

function printArray(arr) {
    console.log(arr.join(' '));
}

let arr = [24, 64, 55 , 12, 11, 33 ]
console.log("Array original:");
printArray(arr);

selectionSortRecursive(arr)

console.log("Array ordenado:");
printArray(arr);