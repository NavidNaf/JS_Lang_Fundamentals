//Event Bubbling
document.querySelector('.card-title').addEventListener('click', onclickTask);

function onclickTask(e) {
    console.log('card title');
};

document.querySelector('.card-content').addEventListener('click', onclickContent);

function onclickContent(e) {
    console.log('card content');
};

document.querySelector('.card').addEventListener('click', onclickCard);

function onclickCard(e) {
    console.log('card');
};

document.querySelector('.col').addEventListener('click', onclickCol);

function onclickCol(e) {
    console.log('col');
};

//Event Delegation

//in this situation event delegation is mandatory
const delItem = document.querySelector('.delete-item');
delItem.addEventListener('click', del);

function del(e) {
    console.log('delete item');
}

document.body.addEventListener('click', itemDel);

function itemDel(e) {
    //console.log(e.target);
    // if (e.target.parentElement.className === 'delete-item secondary-content') {
    //     console.log('Delete Item');
    // }

    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log('Delete Item');
        e.target.parentElement.parentElement.remove();
    }

}