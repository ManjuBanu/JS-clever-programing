// your age in days


function ageInDays(){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    var birthYear = prompt("what year were you born ...Good friend!!!");
    var ageInDayss = (currentYear - birthYear ) * 365;
    var h1=document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss+ ' days old.')
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image=document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    image.width=250;
    image.height=250;
    div.appendChild(image);
}


/**
 console.log(yourChoice);
    console.log(yourChoice.src);
    var humanChoice , botChoice;
    humanChoice = yourChoice.id;
    botChoice =numberToChoice(randomToRpsInt());
    result = decideWinner(humanChoice , botChoice);  //[1,0][0,1][0.5,0.5]
    message = finalMessage(result); [message, color]
    rpsFrondend(yourChoice.id , message , botChoice);
 */
function rpsGame(yourChoice){
    var humanChoice , botChoice;
    humanChoice = yourChoice.id;
    console.log('humanChoice',humanChoice);
    botChoice =numberToChoice(randomToRpsInt());
    console.log('botChoice',botChoice);
    result = decideWinner(humanChoice , botChoice);
    console.log('result',result)
    message = finalMessage(result);
    console.log('message',message);
    frondend  = rpsFrondend(yourChoice.id ,botChoice, message ,);
}

function randomToRpsInt(){
     return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice , computerChoice){
var rpsDatabase = {
    'rock':{'scissor':1, 'rock':0.5, 'paper':0},
    'paper':{'scissor':0, 'rock':1, 'paper':0.5},
    'scissor':{'scissor':0.5, 'rock':0, 'paper':1}
}

var yourScore = rpsDatabase[yourChoice][computerChoice];
var computerScore = rpsDatabase[computerChoice][yourChoice];

return [yourScore, computerScore];
}


function finalMessage([yourScore, computerScore]){
if(yourScore === 0){
    return {'message':'You lost!', 'color':'red'};
}else if(yourScore === 0.5){
    return {'message':'You tied!', 'color':'yellow'};
}else{
    return {'message':'You won!', 'color':'green'};
}
}


function rpsFrondend(yourChoice , computerChoice,finalMessage){
    var imagesDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }

    //remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[yourChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(103, 50, 1, 233)'>";
    messageDiv.innerHTML ="<h1 style='color: "+finalMessage['color'] + "; font-size: 60px ; padding : 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[computerChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38 , 24, 3)'>";

    document.getElementById('flex-rps-div').appendChild(humanDiv);
    document.getElementById('flex-rps-div').appendChild(messageDiv);
    document.getElementById('flex-rps-div').appendChild(botDiv);
}


// change color of all button
var all_buttons = document.getElementsByTagName('button');

//copying all colors before changes happen
var copyColors = [];
for(let i=0;i < all_buttons.length; i++){
    copyColors.push(all_buttons[i].classList[1]);
}

console.log('all_buttons',all_buttons)
console.log('copyColors',copyColors)


function buttonColorChange(buttonThingy){
if(buttonThingy.value === 'red'){
    buttonRed();
}else if(buttonThingy.value === 'green') {
    buttonGreen();
}else if(buttonThingy.value === 'random'){
    buttonRandom();
}else if(buttonThingy.value === 'reset'){
    buttonReset();
}
}


function buttonRed(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonRandom(){
    var choices = ['btn-success','btn-danger','btn-primary','btn-warning'];

    for(let i=0; i < all_buttons.length; i++){
        var randomColor = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomColor]);
    }
}

function buttonReset(){
    for(let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyColors[i]);
    }
}

