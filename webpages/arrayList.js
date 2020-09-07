
    //Which set of characters is used to define an array?
    arrayQuestion = ['()','[]','{}','<>'];
    //Which of the following statement is not an object?
    objectQuestion = ['var car = {make: Ford, model: Fiesta}', '[blue, white, yellow]', 'jkfds;jklfsdaj;lkfdsa;jlkdfs;jl', 'ninety-nine'];
    //Which following command allows javascript to run in html?
    scriptSrcQuestion = ['style', 'script', 'python', 'code'];
    //Which of the following best describes testing for Javascript?
    apiQuestion = ['experiment until the application breaks', 'programmer tests for flaws', 'release without testing and wait for user feedback', 'none of the above'];
    //Which of the following returns true
    booleanQuestion = ['NaN', 'undefined', '0', '1'];


var listTarget = document.getElementById("question");

function multipleChoice () {
    var arrayDiv = document.createElement('div');
    //Add a id to the div
    arrayDiv.setAttribute('id','multiChoice');
    //Append new dic to the DOM (website)
    document.body.appendChild(arrayDiv);
    }
    
//Question Variable Buttons

//setting ul inside chracter ID
//Create a new div    
    
   listQuizArrayQuestion; 
    
    //Listing Variables
    
    function listQuizArrayQuestion() {
      multipleChoice;
      var ul = document.createElement('ul');
      listTarget.appendChild(ul)
        // Render a new li for each array quiz element
        for (var i = 0; i < arrayQuestion.length; i++) {
          var li = document.createElement("li");
          var arrayQ = arrayQuestion[i];
            console.log[i]
    
          li.textContent = arrayQ;
          ul.appendChild(arrayQ);
        }
      }