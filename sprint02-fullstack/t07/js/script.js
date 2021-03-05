function compareSort(a, b) {
    if (a < b)
        return -1
}

function compareOdd(a, b) {
    const odd = n => (n % 2);
    if (odd(a) < odd(b))
        return -1
}

function sortEvenOdd(arr) {
    arr.sort(compareSort)
    arr.sort(compareOdd)
}

let arr = [2, 4, 7, 0, 1, 4, 3];

sortEvenOdd(arr);
console.log(arr);

