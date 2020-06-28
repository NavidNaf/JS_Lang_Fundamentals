const Button1 = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const title = document.querySelector('h5');

//Click
Button1.addEventListener('click', runEvent);
//Double Click
Button1.addEventListener('dblclick', runEvent);
//Mousedown
Button1.addEventListener('mousedown', runEvent);
//Mouseup
Button1.addEventListener('mouseup', runEvent);
//Mouseenter
card.addEventListener('mouseenter', runEvent);
//Mouseleave
card.addEventListener('mouseleave', runEvent);
//Mouseover
card.addEventListener('mouseover', runEvent);
//Mouseout
card.addEventListener('mouseout', runEvent);
//Mouse Move
card.addEventListener('mousemove', runEvent);

Button1.textContent = 'Dump All';
//Event Handler
function runEvent(e) {
    console.log(`Event Type ${e.type}`);

    title.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

// console.log(Button1);
// console.log(card);
// console.log(title);