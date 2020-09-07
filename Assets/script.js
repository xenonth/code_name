//Which set of characters is used to define an array?
var arrayQuestion = ['()','[]','{}','<>'];
//Which of the following statement is not an object?
var objectQuestion = ['var car = {make: Ford, model: Fiesta}', '[blue, white, yellow]', 'jkfds;jklfsdaj;lkfdsa;jlkdfs;jl', 'ninety-nine'];
//Which following command allows javascript to run in html?
var scriptSrcQuestion = ['style', 'script', 'python', 'code'];
//Which of the following best describes testing for Javascript?
var apiQuestion = ['experiment until the application breaks', 'programmer tests for flaws', 'release without testing and wait for user feedback', 'none of the above'];
//Which of the following returns true
var booleanQuestion = ['NaN', 'undefined', '0', '1'];

var countdown = document.getElementById('timer').textContent; //retunring Null
console.log(countdown)
var count = 60;
//The following block will relates and relies on the countdown value.
//on click of start the following will trigger
function timer () {
    setInterval (function () {
        count--;
        console.log('DOOOM!!')        
        if (count === 0) {
            clearInterval;
            //Will need an additional trigger to jump html pages this should be a seperate function
        }
    },count * 1000)
}

function timeDecrease (/*Will fire on wrong answer Input*/) {


}
//When timer reaches 0 the following function will fire to jump to score Result page.
function gameOver () {

}
//Quiz Start Button 
startBtn = document.getElementById("startQuiz")
startBtn.eventListener("on-click", )

//Question Variable Buttons