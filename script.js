// alert('Hello World!');
// var days = 'default';

var greetings = '';

// switch (days) {
//     case 0:
//         greetings = 'leg day!';
//         break;
//     case 1:
//         greetings = 'shoulder!';
//         break;
//     case 2:
//         greetings = 'arms!';
//         break;
//     case 3:
//         greetings = 'back!';
//         break;
//     case 4:
//         greetings = 'abs!';
//         break;
//     case 5:
//         greetings = 'rest day!';
//         break;
//     default:
//         greetings = 'do whatever you want!';
// }


// var teamIndia = ['virat','rahane','rahul','pujara','pant'];

// var i;

// for (i in teamIndia){
//     greetings += teamIndia[i] + '<br>';
// }  


// 

function multiplicationFunc(num1,num2,num3,num4){
    var sum = (num1 * num4) + (num2 * num3);
    return sum;
}




document.getElementById('test').innerHTML = multiplicationFunc(1,2,2,1);

