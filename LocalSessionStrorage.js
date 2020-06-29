// set local storage item
//local storage - stays until manually removed from storage or settings
//session storage - leaves once browser is closed

localStorage.setItem('name', 'Naf');
localStorage.setItem('age', '23');
sessionStorage.setItem('name', 'naf');

//remove from storage
//localStorage.removeItem('name');

//get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

//clear local storage
//localStorage.clear();

console.log(name, age);

document.querySelector('form').addEventListener('submit', addTask);

function addTask(e) {
    const task = document.getElementById('task').value; //take value

    let tasks; //call a variable
    if (localStorage.getItem('tasks') === null) {
        tasks = []; //if nothing there call an array
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks')); //if there from before parse the previous array
        //JSON Parse acts like pointer
    }

    tasks.push(task); //add the new task
    localStorage.setItem('tasks', JSON.stringify(tasks)); //set the new tasks array to the tasks key

    alert('Task Saved.')


    e.preventDefault();
}

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
    console.log(task);
})