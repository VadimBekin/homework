//z1
// const str1 = 'Hello'
// const str2 = 'World!'
// console.log(str1, str2)

//z2
// const str1 = 'I learn computer science!'.replace(/\s/g, "_")
// console.log(str1)

//z3
// const str = 'I learn computer science!'
// console.log(str.length)

//z4
// let str = "bigi black";
//
// let result = "";
// for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//         result += str[i].toUpperCase();
//     }
//     else {
//         result += str[i].toLowerCase();
//     }
// }
// console.log(result);

//z5
// const min = 58;
//
// if (0 <= min && min <= 14) {
//     console.log('Первая');
// }
// if (15 <= min && min <= 29) {
//     console.log('Вторая')
// }
// if (30 <= min && min <= 44) {
//     console.log('Третья')
// }
// if (45 <= min && min <= 60) {
//     console.log('Четвертая')
// }

//z6
// const language = 'en';
//
// if (language === 'ru') {
//     console.log("1. Понедельник");
//     console.log("2. Вторник");
//     console.log("3. Среда");
//     console.log("4. Четверг");
//     console.log("5. Пятница");
//     console.log("6. Суббота");
//     console.log("7. Воскресенье");
// } else if (language === 'en') {
//     console.log("1. Monday");
//     console.log("2. Tuesday");
//     console.log("3. Wednesday");
//     console.log("4. Thursday");
//     console.log("5. Friday");
//     console.log("6. Saturday");
//     console.log("7. Sunday");
// }

//z6b
const language = 'en';

switch (language) {
    case 'en':
        console.log("1. Monday");
        console.log("2. Tuesday");
        console.log("3. Wednesday");
        console.log("4. Thursday");
        console.log("5. Friday");
        console.log("6. Saturday");
        console.log("7. Sunday");
        break;
    case 'ru':
        console.log("1. Понедельник");
        console.log("2. Вторник");
        console.log("3. Среда");
        console.log("4. Четверг");
        console.log("5. Пятница");
        console.log("6. Суббота");
        console.log("7. Воскресенье");
        break;
    default:
        console.log('Язык не поддерживается. Введите ru или en.')
}

//z7-8
// const name = 'Jane';
// const age = 21;
//
// if (name !== 'Jane') {
//     console.log('John');
// } else {
//     console.log(`This is ${name}. She is ${age}.`);
// }

