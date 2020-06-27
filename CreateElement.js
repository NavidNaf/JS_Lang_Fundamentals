//create element
const itemAdd = document.createElement('li');;

//add class
itemAdd.className = 'collection-item';

//add id
itemAdd.id = 'new-item';

//add attribute
itemAdd.setAttribute('title', 'New Item');

// Create text node and append
itemAdd.appendChild(document.createTextNode('New List Item'));

//create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-contents';
link.href = '#';
//Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';
itemAdd.appendChild(link);

//append itemAdd as child to ul
document.querySelector('ul.collection').appendChild(itemAdd);

const anotherNew = document.createElement('li');
anotherNew.className = 'collection-item';
anotherNew.setAttribute('style', 'color:red');
anotherNew.appendChild(document.createTextNode('A Red Task Item'));
document.querySelector('ul').appendChild(anotherNew);

//PROCESS
// 1. create element
// 2. give class, id, attribute
// 3. if textnode, appendChild and Create a text node
// 4. document.querySelect - select the portion to add, append with the const

console.log(anotherNew);
console.log(itemAdd);
console.log(link);