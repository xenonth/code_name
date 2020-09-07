

var countdown = document.getElementById("#timer")
//console.log(countdown)
count = 60;

timer;

//The following block will relates and relies on the countdown value.
//on click of start the following will trigger
function timer () {
    setInterval (function () {
      countdown.textContent= count
        countdown--;
        console.log('DOOOM!!')        
        if (count === 0) {
            clearInterval;
            //Will need an additional trigger to jump html pages this should be a seperate function
        }
    }, 1000)
}

function timeDecrease (/*Will fire on wrong answer Input*/) {


}
//When timer reaches 0 the following function will fire to jump to score Result page.
function gameOver () {

}
//Quiz Start Button 
startBtn = document.getElementById("startQuiz")
startBtn.addeventListener("click", listQuizArrayQuestion)


