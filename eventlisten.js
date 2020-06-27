// document.querySelector('.clear-tasks').addEventListener('click',
//     function(e) {
//         console.log('Hello World.');
//         e.preventDefault();
//     })

document.querySelector('.clear-tasks').addEventListener('click', onclick);

function onclick(e) {
    //console.log('Hello');
    //e.preventDefault();

    let val;

    val = e;

    //Event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    //e.target.innerText = 'Hello';

    //Event Type
    val = e.type;

    //timestamp
    val = e.timeStamp;

    //coordinates of the event relative to the window
    val = e.clientY;
    val = e.clientX;

    //relative to element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
}