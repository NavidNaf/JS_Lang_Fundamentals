let val;

//Number to String
val = String(555); //wrap the number in string function
val = String(57 + 89);

//Boolean to String
val = String(true);
val = String(false);

//Date to String
val = String(new Date());

//Array to String
val = String([1, 2, 3, 4]); //bracket not counted while conversion

//toString method
val = (5).toString();
val = (true).toString();
val = (new Date()).toString();
val = ([1, 2, 3, 4]).toString();

//String to Number
val = Number('5'); //works only for numbers as string

//Boolean to Number
val = Number(true);
val = Number(false);

//Null to Number
val = Number(null);

//parseint,parsefloat
val = parseInt('414');
val = parseFloat('414.567');

//output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(3)); //show till some value

//TypeCoersion

const val1 = 25;
const val2 = (35).toString();
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);