// bucnetsortd recursivo
/* function bucketSortRecursive(arr, numBuckets = 5) {
    if (arr.length <= 1) {
        return ; 
    }

    const minValue = Math.min(...arr);
    let maxValue = Math.max(...arr);

    const buckets = new Array(numBuckets).fill().map(() => []);

    const bucketRange = (maxValue - minValue) / numBuckets;

    for (let i = 0; i < arr.length; i++) {
        let bucketIndex = Math.floor((arr[i] - minValue) / bucketRange);
        if (bucketIndex === numBuckets) { 
            bucketIndex--;
        }
        buckets[bucketIndex].push(arr[i]);
    }

    const sortedArray = [];
    for (let bucket of buckets) {
        if (bucket.length > 0) {
            
            const sortedBucket = bucketSortRecursive(bucket, numBuckets); 
            sortedArray = sortedArray.concat(sortedBucket);
        }
    }

    return sortedArray;
}


let arrayDesordenado = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
console.log("Array original:", arrayDesordenado); */

// no recursiva
function bucketSortIterative(arr, numBuckets = 5) {
    if (arr.length <= 1) {
        return arr; 
    }

    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);

    const buckets = new Array(numBuckets).fill().map(() => []);

    const bucketRange = (maxValue - minValue) / numBuckets;

    for (let i = 0; i < arr.length; i++) {
        let bucketIndex = Math.floor((arr[i] - minValue) / bucketRange);
        if (bucketIndex === numBuckets) { 
            bucketIndex--;
        }
        buckets[bucketIndex].push(arr[i]);
    }

    
    for (let i = 0; i < numBuckets; i++) {
        buckets[i].sort((a, b) => a - b); 
    }

    const sortedArray = [].concat(...buckets);

    return sortedArray;
}


let arrayDesordenado = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
console.log("Array original:", arrayDesordenado);

let arrayOrdenado = bucketSortIterative(arrayDesordenado);
console.log("Array ordenado (no recursivo):", arrayOrdenado);