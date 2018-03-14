// Quick sort

let arr = [1, 5, 125, 4, 67, 32, 67, 2 ,57 ,235, 9 ,34, 33, 13];

const qsort = arr => {
    if(arr.length < 2) {
        return arr;
    } else {
        const pivot = arr[Math.floor(Math.random() * arr.length)];
        const less = arr.filter(value => value < pivot);
        const more = arr.filter(value => value > pivot);
        return [...qsort(less), pivot, ...qsort(more)];
    }
}