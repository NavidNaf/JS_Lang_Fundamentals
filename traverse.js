let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get Child Nodes (using parent to get to child)
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

//Children Element Nodes (HTML Collection)
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Demo textContent';

//Children of Children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

//First and Last Child
val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

//Count Child Elements
val = list.childElementCount;

//Get Parent Node (using child to get to parent)
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get Next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

//Get Prev Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling; //null because first list item

console.log(val);