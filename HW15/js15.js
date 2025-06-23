let name = document.querySelector('#name');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let register = document.querySelector('#register');

let users = {};
function User(name, login, password) {
    this.name = name;
    this.login = login;
    this.password = password;
}

function newID(users) {
    return Object.keys(users).length;

}

register.addEventListener('click', () => {
    const nameUser = name.value;
    const loginUser = login.value;
    const passwordUser = password.value;
    if (!nameUser || !loginUser || !passwordUser) {
        alert('Пожалуйста, заполните все поля!')
        return
    }

    const user = new User(nameUser, loginUser, passwordUser);
    const userID = 'User' + newID(users);
    users[userID] = user;

    console.log(users);
    alert(`${nameUser}, вы успешно зарегистрированы!`);

    name.value = '';
    login.value = '';
    password.value = '';
})