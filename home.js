console.log('hello');

//alert & prompt
// alert('Hello this is Manju');
// prompt("what is your nama..?"); 

/** Variables */
var a ='manju';
console.log('a', a);

var num = 34;
console.log(num);


var age = prompt('whats your age ?');
document.getElementById('age').innerHTML = 'manju';


/** numbers in Js */
var num1 = 10;
num1++;   //increment
num --;   //decrement

console.log(num1);
console.log(num1 / 6);
console.log(num1 * 6);
console.log(num1 % 6);

num1 += 10;
console.log(num1);


/** functions in JS
 1.create a function
 2.call the functions
 */

 // *create
function  fun(){
    alert('this is a functions');
}
//* call
fun();

function greetings(){
    var name=prompt('what is your name?');
    var result = 'Hello' +' '+  name; //string concatenation
    console.log(result);
}

// greetings();

function sumNumbers(num1,num2){
    var result = num1+num2;
    console.log(num1+num2);
}

sumNumbers(10,23);


/** while  loop */
var num3 = 0;
while (num3 >10){
    num3 +=1;
    console.log(num3);
}

/** for loop */
for(let num4 =0; num <=10 ; num++){
    console.log(num4);
}

/** Data types */
let yourAge = 24; //number
let yourName = 'manju'; //string
let name = {first : 'manju',last : 'mala'}; //object
let groceries = ['apple','dhfv','wfhe']; //array
let random;  //undefined
let truth = false; //boolean
let nothing = null; // value null


/** Strings in JS common methods */
let fruit = 'banana,apple,orange,grape';
let moreFruits = 'banana\n apple';

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,5));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));  // split by comma
console.log(fruit.split(''));


/** Array */
let fruits =['banana','apple','orange','grape'];
fruits = new Array('banana','apple','orange','grape');

fruits[0] = 'pear';
console.log(fruits);

for(let i= 0 ; i< fruits.length; i++){
    console.log(fruits[i]);
}


/** Array common methods */
console.log('to string',fruits.toString());
console.log(fruits.join(' * '));
console.log(fruits.pop(),fruits); //remove last one 
console.log(fruits.push('blackberries'),fruits); //appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruits'; // same as push
console.log(fruits);
fruits.shift(); // remove first element of an array
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);


let vegetables = ['pototo','tomato','brocoli'];
let allGroceries = fruits.concat(vegetables); // combain array
console.log(allGroceries);
console.log(allGroceries.slice(1,5));
console.log(allGroceries.reverse());

let someNum = [4,6,2,7,89,2,5,9,2,2,68,67,909,09];
console.log(someNum.sort(function(a,b){return a-b}));
console.log(someNum.sort(function(a,b){return b-a}));

let emptyArray = new Array();
for (let num =0; num<=10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);


/** objects in JS */

let student = {
    first:'manju', 
    last:'devi',
    age:23, 
    height:160,
    studentInfo: function(){
        return this.first + '\n'+ this.age + '\n' +this.last;
    }
};
console.log(student.first); 
console.log(student.last);
student.first ='mala'; // changing value of pre assigned
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());



/** conditionals , Control flows (if else) */
if((age >= 18) && (age <= 35)) {
    status = 'you are eligible'
    console.log(status);
}else{
    status ='!oops sorry';
    console.log(status);
}

//switch statements 
switch(6){
    case 0:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend'
        break;
    default:
        text = 'weekday'
}
console.log(text);
















