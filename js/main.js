//DOM Element

var score = prompt("What your mood today,love? ")

//Array-Quote
const lessScoreQuote = ["It just a bad day not live!","Come on you are the best","Every thing happen for a reason"];
const mediumScoreQuote = ["Are you ready to code?","Keep going sajah","You got this girlllll!"];
const highScoreQuote = ["Happy coding day","Wish your ____ come true","Go girl!"];
//song
const song = [];

//index of [1,2,3]
var numberOfQuote = Math.floor(Math.random()*3);
document.body.style.backgroundImage = "url('denmark.jpg')";


if(score === "") {
    var score = prompt("What your mood today,love? ")
}
else{

    showquote(score);
    changeGreeting();
}

function showquote(score){
    if(score<4){
        document.getElementById("quote").innerHTML = lessScoreQuote[numberOfQuote];
        
        document.body.style.backgroundImage = "url('images/finland.jpg')";
    }
    else if(score>=4 && score<7){
        document.getElementById("quote").innerHTML = mediumScoreQuote[numberOfQuote];
        document.body.style.backgroundImage = "url('images/sea.jpg')";
        document.body.style.color = "White";
    }
    else{
        document.getElementById("quote").innerHTML = highScoreQuote[numberOfQuote];
        document.body.style.backgroundImage = "url('images/tree.jpg')";
        document.body.style.color = "White";
    }
}

//Timing

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
function readyToWork(ekey){
    switch(ekey){
        case " ":
            window.location.assign("https://github.com/Thitiporn3131");

        default:
            alert("Press Spacebar to go! ")

    }
}
//Function keyboard spacebar = ready to work -> www.google.com
document.addEventListener("keypress",function(event){

    readyToWork(event.key);
   
})

//Change greeting
function changeGreeting(){
    document.getElementById("mood").innerHTML = "-Hope you read this-";
}