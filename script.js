// alert('Hello World!');
var days = 'default';

var greetings = '';

switch (days) {
    case 0:
        greetings = 'leg day!';
        break;
    case 1:
        greetings = 'shoulder!';
        break;
    case 2:
        greetings = 'arms!';
        break;
    case 3:
        greetings = 'back!';
        break;
    case 4:
        greetings = 'abs!';
        break;
    case 5:
        greetings = 'rest day!';
        break;
    default:
        greetings = 'do whatever you want!';
}



document.getElementById('test').innerHTML = greetings;

