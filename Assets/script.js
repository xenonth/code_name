//Which set of characters is used to define an array?
var arrayQuestion = ['()','[]','{}','<>'];
//Which of the following statement is not an object?
var objectQuestion = ['var car = {make: Ford, model: Fiesta}', '[blue, white, yellow]', 'jkfds;jklfsdaj;lkfdsa;jlkdfs;jl', 'ninety-nine'];
//Which following command allows javascript to run in html?
var scriptSrcQuestion = ['style', 'script', 'python', 'code'];
//Which of the following best describes testing for Javascript?
var apiQuestion = ['experiment until the application breaks', 'programmer tests for flaws', 'release without testing and wait for user feedback', 'none of the above'];
//Which of the following returns true
var booleanQuestion = ['NaN', 'undefined', '0', '1']

var countdown = document.getElementById('timer')
var count = 60;
countdown.value = count

function timer () {
    setInterval (function () {
        count--;        
        if (count === 0) {
            clearInterval;
            //Will need an additional trigger to jump html pages this should be a seperate function
        }
    },count * 1000)
}

function timeDecrease (/*Will fire on wrong answer Input*/) {


}

function jumpToYouLose () {

}
timer;