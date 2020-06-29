// const user = document.getElementById('user');
// const pass = document.getElementById('pass');

const submit = document.getElementById('link').addEventListener('click', onclick);

function onclick(e) {
    console.log(e.target);
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    let usernames;
    if (localStorage.getItem('usernames') === null) {
        usernames = [];
    } else {
        usernames = JSON.parse(localStorage.getItem('usernames'));
    }

    usernames.push(user);
    localStorage.setItem('usernames', JSON.stringify(usernames));

    let passwords;
    if (localStorage.getItem('passwords') === null) {
        passwords = [];
    } else {
        passwords = JSON.parse(localStorage.getItem('passwords'));
    }
    passwords.push(pass);
    localStorage.setItem('passwords', JSON.stringify(passwords));

    e.preventDefault();
}

const usernames = JSON.parse(localStorage.getItem('usernames'));
const passwords = JSON.parse(localStorage.getItem('passwords'));

usernames.forEach(function(user) {
    console.log(`Username: ${user}`);
});

passwords.forEach(function(pass) {
    console.log(`Password: ${pass}`);
});