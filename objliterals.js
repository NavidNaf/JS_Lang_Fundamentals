const person = {
    firstname: 'Navid',
    lastname: 'Naf',
    age: 23,
    email: 'navidfazlerabbi@iut-dhaka.edu',
    hobbies: ['music', 'sports', 'sleeping', 'coding'],
    address: {
        area: 'Mirpur',
        city: 'Dhaka'
    },
    getBirthYear: function() {
        return 2019 - this.age;
    }
}

let val;
val = person;

//getting specifics
val = person.firstname;
val = person.hobbies[2];
val = person.address.city;
val = person.getBirthYear(); //paranthesis as because it is a function

console.table(person);
console.log(val);

//array of objects
const manush = [
    { name: 'Navid', age: 23 },
    { name: 'Barsha', age: 22 },
]

console.table(manush);
console.log(manush);

//for loop
for (let i = 0; i < manush.length; i++) {
    console.log(manush[i].name);
}