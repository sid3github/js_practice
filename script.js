// alert('Hello World!');
// var days = 'default';

// var greetings = '';

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

// function multiplicationFunc(num1,num2,num3,num4){
//     var sum = (num1 * num4) + (num2 * num3);
//     return sum;
// }

// function degreefunc(num){
//     var fahr = (num * 9/5) + 32;

//     return fahr;
// }

// var myScore = 20;

// function highestScore(){
//     var teamScore = 85;
//     return teamScore;
// }

// var attribute = {
//     firstName: 'Siddharth ',
//     lastName: 'Padwal',
//     age: 26,
//     height: 5.5,
//     weight: 70,
//     fullName: function(){
//         return this.firstName + this.lastName;
//     }
// }


// Binding functions to event.
// function showDate(){
//     document.getElementById('test').innerHTML = Date();
// }


//try and catch

// try{
//     aleert('hello world');
// }catch(err){
//     document.getElementById('test').innerHTML = err.message;
// }


// function myError(){
//     var msg,x;

//     msg = document.getElementById('msg');
//     msg.innerHTML = '';

//     x = document.getElementById('some').value;
//     try {
//         if (x == '') throw 'please choose a number';
//         if (isNaN(x)) throw 'only numbers are allowed';
//         if (x <= 3) throw 'the number should be greater or equal than 3';
//     } catch(err) {
//         msg.innerHTML = 'Error is ' + err;
//     } finally {
//         document.getElementById('some').value = '';
//     }

// }


// Numbers inbuilt methods
// console.log(Math.random((Math.min(0,-1,25,41,1))));


//regex 

// var str = 'apple Apple APPLE APPle appLE';

// var txt = str.replace(/([A-Z])\w+/gmi,'google');

// document.getElementById('test').innerHTML = txt;


// basic Function.

// var sum;

// function mathFunc(num){
//      sum = (5 * 2 - 10 * num);
//     return sum;
// }

// mathFunc(1);

// document.getElementById('test').innerHTML = sum;



// Another way of writting functions and return statement. 

// var maxPoints = function highPoints(currentPoints){
//     return (
//         console.log(5 * currentPoints)
//     )
// }(5);



//Using function as an object.

// var player = {
//     name: 'Siddharth',
//     age: 26,

//     salary: function(monthly){
//         return('my salary is awesome',
//         console.log(this.age))
//     },
//     skills: [
//         {html: 'good'},
//         {javascript: 'moderate'}
//     ]
    
// }

// player.salary(30000);
// console.log(player.skills);

// document.getElementById('test').innerHTML = player.name;


// var umpire = function(){
//     return('umpire\'s are always right');
// }

// var player = function(){
//     var runs, batStyle;
// }


// player.prototype.umpire = umpire;
// viratKohli = new player;
// viratKohli.runs = 6553;
// viratKohli.batStyle = 'right-handed';

// console.log(viratKohli.runs);
// console.log(viratKohli.umpire());

// sachinTendulkar = new player;
// sachinTendulkar.runs = 15566;
// sachinTendulkar.batStyle = 'right-handed';

// console.log(sachinTendulkar.runs);


// var gym = function(workout){
//     console.log(workout);
//     console.log(this.benchPress);
// }

// gym('deadLift');

// var lift = {benchPress: '2 sets',squats: '4 sets'};

// gym.call(lift,lift.squats);
// gym.apply(lift,['fly']);


// var doSomething = function(work){
//     console.log(work);
// }

// doSomething('pushUps');


//creating new nodes in DOM.
var newList = document.createElement('li');
newList.innerHTML = 'This is list four created by javascript';



































// document.getElementById('test').innerHTML = 'I like to code!';

