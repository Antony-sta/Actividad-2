function insertionSort(arr, n) {
    if (n <= 1) {
        return;
    }

    insertionSort(arr, n - 1);

    const last = arr[n - 1];
    let x = n -2;

    while (x >= 0 && arr[x] > last) {
      arr [x + 1] = arr [x];
      x--;
    }
    arr[x + 1] = last;
}

let arr = [12, 11, 14, 6, 7];
insertionSort(arr, arr.length);
console.log("Arreglo Ordenados");
console.log(arr); 

