
// Quiek sort recursivo
 /* function quickSortRecursive(arr, low = 0, high = arr.length - 1){
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortRecursive(arr, low, pivotIndex - 1);
        quickSortRecursive(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1; 

    for (let j = low; j <= high - 1; j++) {
        if (arr [j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
return i + 1;
}

let arrayDesordenado = [64, 34, 25, 12, 22, 77, 88, 99, 110];
console.log("Arraydesordenado:", arrayDesordenado);

quickSortRecursive(arrayDesordenado);  */

// No recursivo 

function quickSortRecursive (arr){
    const stack = [];
    stack.push(0);
    stack.push(arr.length - 1);

    while (stack.length > 0){
        const high = stack.pop();
        let low = stack.pop();

        const pivotIndex = partition(arr, low, high);

        if (pivotIndex - 1 > low) {
            stack.push(low);
            stack.push(pivotIndex - 1);
        }

        if (pivotIndex + 1 < high) {
            stack.push(pivotIndex + 1);
            stack.push(high);
        }
    }
}

function partition (arr, low, high){
    const pivot = arr [high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

let arrayDesordenado = [64, 34, 25, 12, 22, 11, 90];
console.log ("array desordenado:", arrayDesordenado);

quickSortRecursive(arrayDesordenado);
console.log(" array ordenado (no recursuvo)", arrayDesordenado);