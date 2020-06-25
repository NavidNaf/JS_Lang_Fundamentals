let val;

const today = new Date();
let birthday = new Date('02/11/1996 11:25:00');
birthday = new Date('February 11 1996');



val = today.getMonth(); //months start from 0 as well. so June is 5, not 6
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //timestamp

birthday.setMonth(7);
birthday.setDate(25);
birthday.setFullYear(2077);
birthday.setHours(3);
birthday.setMinutes(49);
birthday.setSeconds(13);

console.log(birthday);
console.log(typeof val);