//Array Creating
const numbers = [1, 2, 3, 4, 5];
const numbers2 = new Array(44, 69, 485, 32, 566);
const hobbies = ['music', 'movie', 'reading books', 'sleeping', 'coding'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

//Array Length
val = numbers.length;

//check if is an array
val = Array.isArray(mixed);

//Get Single Value from array
val = numbers[3];
val = numbers[0];

//change an index value
numbers[0] = 25;

//Find index of a value
val = numbers.indexOf(4);

//Mutating arrays
numbers.push(250, 789); //addition to end
numbers.unshift(120, 783); //add to front
numbers.pop(); //remove from end
numbers.shift(); //remove from front

//Splice values
numbers.splice(0, 4);

//Reverse
numbers.reverse();

//concatenate
val = numbers.concat(numbers2);

//sort
val = hobbies.sort();

//using compare function
val = numbers.concat(numbers2);
let x;
x = val.sort(function(x, y) {
    return x - y;
});

//find
function over50(num) {
    return num > 50;
}
//this function returns first number over or under 50

val = numbers2.find(over50);

console.log(numbers);
console.log(val);
// console.log(x);