function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
 }
}

function heapSort(arr, n = arr.length) {
    if ( n <= 1) {
        return arr; 
    }

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
 }

 [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];

 heapSort(arr, n - 1);
 return arr;
}

const arr = [2, 11, 13, 5, 6, 7, 22, 34, 66];
console.log("Array original:", arr);
heapSort(arr);
console.log("Array ordenado:", arr);