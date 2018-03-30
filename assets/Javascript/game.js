//Returns a random number between min (inclusive) and max (exclusive)
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}

var randomTagIt = getRandomNumber(19,127)

var randomCrystal1 = getRandomNumber(1,12)
var randomCrystal2 = getRandomNumber(1,12)
var randomCrystal3 = getRandomNumber(1,12)
var randomCrystal4 = getRandomNumber(1,12)


//scoring
var total = 0
var win = 0 
var loss = 0 

$(document).ready(function(){
    $('h2#ranNumber').html(function(){return '<h2> New Random Number: '+randomTagIt+'</h2>'})
})


$('h2#totalNumber').html(function(){return '<h2> Total Score: '+total+'</h2>'})
$('h3#Wins').html(function(){return '<h3> Wins: '+win+'</h3>'})
$('h3#Losses').html(function(){return '<h3> Losses: '+loss+'</h3>'})

$('img#oneRandom').on('click', function(){
    total = total+randomCrystal1;
    $('h2#totalNumber').html(function(){return '<h2> Total Score: '+total+'</h2>'})
})
$('img#twoRandom').on('click', function(){
    total= total+randomCrystal2;
    $('h2#totalNumber') .html(function(){return '<h2> Total Score: '+total+'</h2>'})
})
$('img#threeRandom').on('click', function(){
    total= total+randomCrystal3;
    $('h2#totalNumber') .html(function(){return '<h2> Total Score: '+total+'</h2>'})
})
$('img#fourRandom').on('click', function(){
    total= total+randomCrystal4;
    $('h2#totalNumber') .html(function(){return '<h2> Total Score: '+total+'</h2>'})
})

// wins
// if (ranNumber !== randomTagIt ) {

//     document.getElementById('img#oneRandom').innerHTML="loss";
//     }   
    
//     else if (ranNumber === 0 && randomTagIt === 2) {
    
//     document.getElementById('img#oneRandom').innerHTML="win";
//     }