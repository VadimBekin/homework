//z1
// function isPrime(n) {
//     if (n === 2) {
//         return 'Простое число';
//     }
//     let i = 2;
//     let sum = Math.sqrt(n);
//     while (i <= sum) {
//         if (n % i === 0) {
//             return 'Составное число';
//         }
//         i += 1;
//     }
//     return 'Простое число'
// }
// console.log(isPrime(1));

//z2
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(isPalindrome('Ася, молоко около мяса'))
console.log(isPalindrome('которая возвращает сумму'))

//z3
// function uniqueValues(arr) {
//     return [...new Set(arr)];
// }
// console.log(uniqueValues([1, 2, 2, 3, 3, 4, 5]));


//z4
// function sumRange(start, end) {
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumRange(1, 5))

//z5
// function getUniqueChars(str) {
//     const charCount = {};
//     const result = [];
//     for (const char of str) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     for (const char in charCount) {
//         if (charCount[char] === 1) {
//             result.push(char);
//         }
//     }
//     console.log(result);
//     return result;
// }
// getUniqueChars("shalash");

//z6
function aRa(n) {
    const arr = Array.from({length: n}, () => Math.floor(Math.random() * 101));
    console.log('Сгенерированный массив:', arr)
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / n;
    console.log('Максимальное', max)
    console.log('Минимальное', min)
    console.log('Сумма элементов', sum)
    console.log('Среднее арифметическое', average.toFixed(2))

    return {
        array: arr,
        max,
        min,
        sum,
        average
    };
}
aRa(10)


//z7
// function generateFibonacci(n) {
//     if (n <= 0) return [];
//     if (n === 1) return [0];
//
//     const fibSequence = [0, 1];
//
//     for (let i = 2; i < n; i++) {
//         fibSequence.push(fibSequence[i-1] + fibSequence[i-2]);
//     }
//
//     console.log(fibSequence);
//     return fibSequence;
// }
// generateFibonacci(10)
