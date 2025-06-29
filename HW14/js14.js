//z1
// function proArr(numbers) {
//     const evenNumbers = numbers.filter(num => num % 2 === 0);
//     const evenAverage = evenNumbers.length ? evenNumbers.reduce((sum, num) => sum + num, 0) / evenNumbers.length : 0;
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
// function find(arr) {
//     if (!arr ||arr.length === 0) {
//         return undefined;
//     }
//     let sum = arr.reduce((acc, num) => acc + num, 0);
//     let average = sum / arr.length;
//     let nElement = arr[0];
//     let min = Math.abs(arr[0] - average);
//     for (let i = 1; i <= arr.length; i++) {
//         let dif = Math.abs(arr[i] - average);
//         if (dif < min) {
//             min = dif;
//             nElement = arr[i];
//         }
//     }
//     return nElement;
// }
// let num = [1, 8, 3, 10, 4, 7];
// let fin = find(num);
// console.log(fin);


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

function right (arr, n, fillValue) {
    if (n <=0 || !Array.isArray(arr)) {
        return arr;
    }
    const len = arr.length;
    if (len === 0) return arr();
    n = Math.min(n, len);
    const removedElements = arr.splice(len - n, n);
    for (let i = 0; i < n; i++) {
        arr.unshift(fillValue);
    }
    return arr;
}
let myArray = [1, 2, 3, 4, 5];
let  rightArray = right(myArray, 5, 3);
console.log(rightArray);


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