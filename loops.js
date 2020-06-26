//FOR loop
for (let i = 0; i < 10; i++) {
    if (i + 1 === 2) {
        console.log(`${i + 1} is my favorite number`);
        continue;
    }
    if (i === 5) {
        break;
    }
    console.log(`Position: ${i + 1}`);
}

//WHILE Loop
let i = 0;
while (i < 10) {
    console.log(`Position: ${i + 1}`);
    i++; //if not incremented runs infinite loop
}

//DO-WHILE Loop
i = 0;
do {
    console.log(`Position: ${i + 1}`);
    i++;
} while (i < 10);

//Loop through array
const cars = ['ford', 'maseratti', 'toyota', 'ferrari', 'bmw'];

for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//forEach
cars.forEach(function(car, index, array) {
    console.log(`${index}: ${car}`);
    console.log(array);
});

//MAP
const users = [
    { id: 1, name: 'Naf' },
    { id: 2, name: 'Navid' },
    { id: 3, name: 'Fazle' },
    { id: 4, name: 'Rabbi' },
];

const ids = users.map(function(user) {
    return user.id;
});

console.log(ids);

//for in loop (used for object)
//key: value

const user = {
    firstname: 'Navid',
    lastname: 'Naf',
    age: 23
}

for (let x in user) {
    console.log(`${x}: ${user[x]}`);
}