//1
// let a = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 44, 44, 53, 53, 63, 63, 63]
// let b = [new Set(a)]
// console.log(b)

//2
// function fac(a) {
//     let r = 1;
//     for (let i = 1; i <= a; i++) {
//         r *= i;
//     }
//     return r;
// }
// console.log(fac(10));



//3
// let year = 2021;
// if (year % 4 === 0) {
//     console.log(year, 'Високосный');
// } else {
//     console.log(year, 'Не високосный');
// }


//4
// let animals = ['собачка', 'котик', 'собачка', 'лев', 'лев', 'попугай', 'слон']
// let count = {};
// for (let animal of animals) {
//     count[animal] = (count[animal] || 0) + 1;
// }
// console.log(count);

//5
// let user = {
//     age: 31,
//     name: 'Habib',
//     email: 'habib@gmail.com',
//     password: 'habibi'
// }
// let count = Object.keys(user).length
// console.log(`Количество свойств: ${count}`)


//6
let users = [
    {name: 'Leha', age: 21},
    {name: 'Valera', age: 15},
    {name: 'Sergey', age: 17},
    {name: 'Misha', age: 25},
    {name: 'Lena', age: 45},
    {name: 'Olga', age: 35},
    {name: 'Sveta', age: 29}
]
let minAge = 26;
let propusk = [];
for (let user of users) {
    if (user.age >= minAge) {
        propusk.push(user);
    }
}
console.log(propusk);

//7
let numb = [];
for (let i = 0; i < 10; i++) {
numb.push(Math.floor(Math.random() * 101));
}
console.log(numb);

//8
// let str = 'ЗДАРОВА';
// let strRev = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     strRev += str[i];
// }
// console.log(strRev);

