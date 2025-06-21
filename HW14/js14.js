//z1
// function proArr(numbers) {
//     const evenNumbers = numbers.filter(num => num % 2 === 0);
//     const evenAverage = evenNumbers.length > 0 ? evenNumbers.reduce((sum, num) => sum + num, 0) / evenNumbers.length : 0;
//
//     const positiveNumbers = numbers.filter(num => num >= 0);
//
//     const sum3 = numbers
//         .filter(num => num % 3 === 0)
//         .reduce((sum, num) => sum + num, 0);
//
//         return {
//             evenAverage,
//             positiveNumbers,
//             sum3
//         };
// }
// const result = proArr([0, 1, 2, 3, 4, -5, 6, -7, 8, 9]);
// console.log(result.evenAverage);
// console.log(result.positiveNumbers);
// console.log(result.sum3);

//z2
// function sred(arr) {
//     if (!Array.isArray(arr) || arr.length === 0) {
//     }
//
//     const sum = arr.reduce((total, num) => total + num, 0 );
//     const average = sum / arr.length;
//
//     let closestValue = arr[0];
//     let smallestDiff = Math.abs(arr[0] - average);
//     let close = 0;
//
//     for (let i = 1; i < arr.length; i++) {
//         const curr = Math.abs(arr[i] - average);
//         if (curr < smallestDiff) {
//             smallestDiff = curr;
//             closestValue = arr[i];
//             close = i;
//
//         }
//     }
//     return {
//         average: average,
//         close: close,
//         closestValue: closestValue,
//         difference: smallestDiff
//     }
// }
//
// const numbers = [10, 20, 35, 40, 50];
// const result = sred(numbers);
// console.log(result.average.toFixed(2));
// console.log(result.closestValue, result.close);
// console.log(result.difference.toFixed(2));

//z3
// function sun(arr) {
//     const first = arr.indexOf(0);
//     const last = arr.lastIndexOf(0);
//     if (first === -1 || last === -1 || first === last) {
//         return 0;
//     }
//     let sum = 0;
//     for (let i = first + 1; i < last; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sun([0, 1, 2, 3, 4, 5, 0]));
// console.log(sun([0, 1, 2, 3, 0, 4, 5]));

//z4
function right(arr, n, fillValue = 0) {
    if (arr.length === 0);
    n = n % arr.length;
    const ship = new Array(arr.length).fill(fillValue);
    for (let i = 0; i < arr.length; i++) {
        const pos = (i + n)  % arr.length;
        ship[pos] = arr[i];
    }
    return ship;
}
console.log(right([1, 2, 3, 4, 5], 3))


//z5
// function max(arr) {
//     if (arr.length === 0) return 0;
//     let maxCount = 1;
//     let curr = 1;
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1]) {
//             curr++;
//             if (curr > maxCount) {
//                 maxCount = curr;
//             }
//         } else {
//             curr = 1;
//         }
//     }
//     return maxCount;
// }
// console.log(max([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5]))