function largestNumbers(arr) {
    if (arr.length < 2) {
        throw 'Invalid Input';
    }
    let largest = 0;
    let second = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > largest){
          if (largest > second) {
            second = largest
          }
          largest = arr[i];
      } else if (arr[i] > second) {
        second = arr[i];
      }
    }
    return [largest, second]
}
let arr = [101, 100, 18, 1, 100, 2, 1];
console.log('2 Largest numbers in given array are: ' + largestNumbers(arr));
