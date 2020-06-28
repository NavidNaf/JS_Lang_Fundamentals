const form = document.querySelector('form');
const task = document.getElementById('task');
const heading = document.querySelector('h5');

form.action = 'index.php';
console.log(form);

//clear input
task.value = '';
// submit
form.addEventListener('submit', runEvent);

// keydown
task.addEventListener('keydown', runEvent);

// keyup
task.addEventListener('keyup', runEvent);

// keypress
task.addEventListener('keypress', runEvent);

// focus
task.addEventListener('focus', runEvent);

// blur
task.addEventListener('blur', runEvent);

// cut
task.addEventListener('cut', runEvent);

// paste
task.addEventListener('paste', runEvent);

// input
task.addEventListener('input', runEvent);

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
    console.log(e.target.value);
    heading.textContent = e.target.value;

    console.log(e.target.value);

    //Get input value
    console.log(task.value);

    e.preventDefault();
}