const addTask = document.getElementById('add-task');
const task = document.getElementById('task');


console.log(addTask);
console.log(task);
//console.log(newTask);

addTask.addEventListener('click', onclick);

function onclick(e) {
    const newTask = document.createElement('li');
    newTask.className = 'collection-item';
    newTask.appendChild(document.createTextNode(task.value));
    document.querySelector('ul').appendChild(newTask);
    console.log(newTask);
    e.preventDefault();
}