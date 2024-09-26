function mergeSortIterative(arr) {
    if (arr.length <= 1) {
        return; 
    }

    const n = arr.length;

    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) { 
            const mid = Math.min(leftStart + size, n); 
            const rightEnd = Math.min(leftStart + 2 * size, n); 
            merge(arr, leftStart, mid, rightEnd);
        }
    }
}

function merge(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid);
    const rightArr = arr.slice(mid, right); 

    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }

    while (i < leftArr.length) {
        arr[k++] = leftArr[i++];
    }

    while (j < rightArr.length) {
        arr[k++] = rightArr[j++];
    }
}

const arrayDesordenado = [22, 55, 34, 64, 43, 25, 76, 11, 110];
console.log("Array original:", arrayDesordenado);

mergeSortIterative(arrayDesordenado); 
console.log("Array Ordenado:", arrayDesordenado);