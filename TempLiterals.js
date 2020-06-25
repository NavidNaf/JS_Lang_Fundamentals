const name = 'Naf';
const age = 24;
const job = 'System Analyst';
const city = 'Dhaka';
let html;

//without template strings es5
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

//function
function hello() {
    return 'hello';
}

//with template strings
html = `
    <ol>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ol>

`;

document.body.innerHTML = html;