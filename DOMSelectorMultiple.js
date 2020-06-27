//document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[0]);
//items[0].style.color = 'red';
items[2].textContent = 'This is a demo text';

const listitems = document.querySelector('ul').getElementsByClassName('collection-item');
//selects the class that is only inside ul
console.log(listitems);

//document.getElementsByTagName
const lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[3].style.color = 'blue';
lis[1].textContent = '7up';

//convert HTML to array
const arrList = Array.from(lis);
console.log(arrList);

arrList.reverse();

arrList.forEach(function(elements, index) {
    console.log(elements);
    elements.textContent = `${index}: ${elements}`;
});

//document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
//converts into a node list. similar to array.

items.forEach(function(element, index) {
    element.textContent = `${index}: Okay this is nice.`;
})

const listOdd = document.querySelectorAll('li:nth-child(odd)');
const listEven = document.querySelectorAll('li:nth-child(even)');
console.log(listEven);
console.log(listOdd);


//as they are in node list (array), color them using loop
listOdd.forEach(function(elements) {
    elements.style.background = '#e5e5e5';
});

for (let i = 0; i < listEven.length; i++) {
    listEven[i].style.background = '#f4f4f4';
}

console.log(items);