//z1
// fetch('https://jsonplaceholder.typicode.com/users/1', {
//   method: 'GET',
// }).then(res => res.json()).then((users) => console.log(users));

// async function fetchUserData(userId) {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   const userData = await response.json();
//   console.log('Данные пользователя:', userData);
//   return userData;
// }
//
// fetchUserData(1);

//z2-3
// const obj = {
//   body: 'Hello World',
//   title: 'Hello Misha',
//   username: 'Revolver',
// };
// console.log(JSON.stringify(obj, null, 2));
//
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(obj),
// }).then(res => res.json()).then(data => {
//   console.log(data);
// }).catch(err => console.log(err.message));

//z4
