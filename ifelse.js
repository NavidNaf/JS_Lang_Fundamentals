const id = 100;

//equal to
if (id == 127) {
    console.log('Correct.');
} else {
    console.log('Incorrect.');
}

//not equal
if (id != 127) {
    console.log('Correct.');
} else {
    console.log('Incorrect.');
}

//Equal to value and type
if (id === 100) {
    console.log('Correct.');
} else {
    console.log('Incorrect.');
}

//Not Equal to value and type
const id2 = '100';
if (id2 !== 100) {
    console.log('Correct.');
} else {
    console.log('Incorrect.');
}

//test if undefined
//const num = 3;
if (typeof num !== 'undefined') {
    console.log(`This is an Number, which is ${num}.`);
} else {
    console.log('Not a Number');
}

//Greater or Less
const id4 = 400;
if (id4 >= 400) {
    console.log('Greater than 200.');
} else {
    console.log('Not greater than 200.');
}

//ifelse
const color = 'Majenta';
if (color === 'Red') {
    console.log(`Color is ${color}.`);
} else if (color === 'Blue') {
    console.log(`Color is ${color}.`);
} else if (color === 'Green') {
    console.log(`Color is ${color}.`);
} else {
    console.log(`Color is ${color}.`);
}

//logical operators
const name = 'Navid';
const age = 24;

//AND
if (age > 0 && age <= 12) {
    console.log(`${name} is a Child`);
} else if (age > 12 && age <= 19) {
    console.log(`${name} is a Teenager`);
} else {
    console.log(`${name} is an Adult`);
}

//OR
if (age < 16 || age > 65) {
    console.log(`${name} Can not Run in Race.`);
} else {
    console.log(`${name} can run in Race.`);
}

//ternary operator
console.log(id4 === 400 ? 'CORRECT' : 'INCORRECT');

//without brace
const a = 78;
if (a === 77)
    console.log('Right.');
else
    console.log('Wrong.');