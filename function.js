//Function Declaration

function greet(firstName, lastName) {
    //console.log('Hello');
    return `Hello ${firstName} ${lastName}`;
}

console.log(greet('Naf', 'Mia'));

function demoMath(a, b) {
    const z = a * 75 + b * 89;
    return z;
}

console.log(demoMath(57, 38));

//Function Expressions
const square = function(x) {
    return x * x;
};

console.log(square(5));

//Immediately Invokable Function Expressions - IIFEs

(function() {
    console.log('IIFE Ran..');
})();

(function(name) {
    console.log(`Hello ${name}`);
})('Naf');

//Property Methods
const todo = {
    add: function() {
        console.log('Add todo..')
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo...')
};

todo.add();
todo.edit(771);
todo.delete();

console.table(todo);