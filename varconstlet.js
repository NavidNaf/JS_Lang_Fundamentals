// //variable
// //usability is much like C
// var name = 'Navid Fazle Rabbi';
// console.log(name);

// name = 'Naf'; //var reassign
// console.log(name);

// //init var
// var greet;
// console.log(greet);
// greet = 'Hi!';
// console.log(greet);

// //using let
// let name;
// name = 'Navid Fazle Rabbi';
// console.log(name);
// name = 'Naf';
// console.log(name);

// // using const
// const name = 'Naf';
// console.log(name);
// name = 'Navid'; // can not reassign

const person = {
    name: 'Naf',
    age: 24
};
person.name = 'Navid';

// person = {
//     name: 'Barsha',
//     age: 24
// };
console.table(person);

const numbers = [1, 2, 3, 4, 5, 6];
numbers.push(7);
//numbers.pop();
console.log(numbers);