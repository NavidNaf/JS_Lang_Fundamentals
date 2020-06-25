const firstname = 'Navid';
const lastname = 'Naf';
const age = 24;
let val;

val = firstname + lastname;

//concatenation
val = firstname + ' ' + lastname;

//append
val = 'Navid ';
val = val + 'Naf';

//make sentence
val = 'Hello! My Name is ' + firstname + ' and I am ' + age;

//escaping
val = "That's awesome, I can't wait"; //use backslash, won't use

//length
val = firstname.length;

//concat
val = firstname.concat(' ', lastname);

//change case
val = firstname.toUpperCase();
val = firstname.toLowerCase();

val = firstname[3];

//indexof()

val = firstname.indexOf('v');
val = firstname.lastIndexOf('d');

//charAt()
val = firstname.charAt('4');

//Get Last Charachter
let len = firstname.length;
val = firstname.charAt(len - 1);

//substring()
val = firstname.substring(0, 3);

//slice()
val = firstname.slice(0, 3);
val = firstname.slice(-2);

//split()
const str = 'Hello! My name is Naf';
val = str.split(' ');
const hob = 'Music, Movies, Gardening, Book Reading, Sleeping';
val = hob.split(', ');

//replace
val = str.replace('Naf', 'Navid');

//includes()
val = str.includes('Hello');

console.log(val);