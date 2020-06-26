//Window Methods / Objects / Properties

//console.log(123);

//Alert
//alert('Hello World');

//Prompt (used to take an input)
// const input = prompt();
// alert(`Hello ${input}`);

//Confirm
// if (confirm('Are you Sure?')) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

let val;

//Outer H and W
val = window.outerHeight;
val = window.outerWidth;

// Inner H and W
val = window.innerHeight;
val = window.innerWidth;

val = window.outerWidth - innerWidth;

//Scroll Points - used for scroll based animations
val = window.scrollY;
val = window.scrollX;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;


//Redirect
//window.location.href = 'http://google.com'

//Reload
//window.location.reload();

//History Object
//window.history.go();
//val = window.history.length;

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;


console.log(val);