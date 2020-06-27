//Replace Elements

//Create Element
const newTitle = document.createElement('h2');
//Add id
newTitle.id = 'task-title';
//New Text Node
newTitle.appendChild(document.createTextNode('Task List'));

//Get Old Heading
const oldTitle = document.getElementById('task-title');
//parent access
const cardAction = document.querySelector('.card-action');

//replace
cardAction.replaceChild(newTitle, oldTitle);

//REMOVE Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// //Remove list item
// lis[0].remove();

// //Remove ChildElement
// list.removeChild(lis[2]);

//CLASSESS & ATTRIBUTES
const firstli = document.querySelector('li:first-child');
const link = firstli.children[0];

let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

val = link;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'google');
link.removeAttribute('title');

val = link;

//console.log(val);

const newListItem = document.createElement('h1');
newListItem.className = 'New Heading';
newListItem.appendChild(document.createTextNode('List of Tasks'));

const oldListItem = document.querySelector('.card-title');
const change = document.querySelector('.card-content');

change.replaceChild(newListItem, oldListItem);


console.log(change);
console.log(oldListItem);
console.log(newListItem);