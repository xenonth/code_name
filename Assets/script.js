const quizQuestions = {
    //Which set of characters is used to define an array?
    arrayQuestion: ['()','[]','{}','<>'],
    //Which of the following statement is not an object?
    objectQuestion: ['var car = {make: Ford, model: Fiesta}', '[blue, white, yellow]', 'jkfds;jklfsdaj;lkfdsa;jlkdfs;jl', 'ninety-nine'],
    //Which following command allows javascript to run in html?
    scriptSrcQuestion: ['style', 'script', 'python', 'code'],
    //Which of the following best describes testing for Javascript?
    apiQuestion: ['experiment until the application breaks', 'programmer tests for flaws', 'release without testing and wait for user feedback', 'none of the above'],
    //Which of the following returns true
    booleanQuestion: ['NaN', 'undefined', '0', '1'],
}

var countdown = document.getElementById("timer").innerHTML; 
//console.log(countdown)
countdown = 59


timer;

//The following block will relates and relies on the countdown value.
//on click of start the following will trigger
function timer () {
    setInterval (function () {
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

//Question Variable Buttons

//Listing Variables

function listQuizArrayQuestion() {
    // Render a new li for each array quiz element
    for (var i = 0; i < quizQuestions.arrayQuestion.length; i++) {
      var arrayQ = quizQuestions.arrayQuestion[i];
        console.log[i]
      var li = document.createElement("li");
      li.textContent = arrayQ;
      arrayQ.appendChild(li);
    }
  }