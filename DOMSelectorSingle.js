// //1. document.getElementById()

// console.log(document.getElementById('task-title'));

// //things that can be done when we select an item

// //Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);


const tasktitle = document.getElementById('task-title');
// //Change Styling
tasktitle.style.background = '#152428';
tasktitle.style.color = '#ffffff';
tasktitle.style.padding = '5px';
// //document.getElementById('task-title').style.display = 'none';

// //Change Content
tasktitle.textContent = 'Task List';
tasktitle.innerText = 'My Tasks';
tasktitle.innerHTML = '<span style = "color:yellow"> List of Tasks </span>';

//2. document.querySelector()
//not only select by id, select by anything

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red'; //single element selector, only the first one
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'hello world';
document.querySelector('li:nth-child(odd)').style.background = '#1e1e1e';
document.querySelector('li:nth-child(even)').style.background = '#dbc316';