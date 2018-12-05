// alert('Hello World!');
var coffeeLevel = 22;

var codingLevel = 8;

var greetings = '';

if (coffeeLevel < codingLevel) {
    greetings = 'Fill the coffee and start coding!';
} else {
    greetings = 'Just keep... coding!!';
}



document.getElementById('test').innerHTML = greetings;

