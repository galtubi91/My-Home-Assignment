
function largestNumbers(arr) {
    let i;
    let largest = second = arr[0];

    if (arr.length < 2) {
        throw 'Invalid Input';
    }

    for (i = 1; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
    }

    for (i = 0; i < arr.length; i++){
        if (arr[i] > second && arr[i] < largest){
            second = arr[i];
        }
    }
    return [largest, second]
}

let arr = [1, 12, 5, 18, 3];
console.log("2 Largest numbers in given array are: " + largestNumbers(arr));
