window.onload = function() {

    // create a couple of elements in an otherwise empty HTML page

 
    //Which set of characters is used to define an array?

    //Which of the following statement is not an object?
    //var objectQuestion = ['var car = {make: Ford, model: Fiesta}', '[blue, white, yellow]', 'jkfds;jklfsdaj;lkfdsa;jlkdfs;jl', 'ninety-nine'];
    //Which following command allows javascript to run in html?
    //var scriptSrcQuestion = ['style', 'script', 'python', 'code'];
    //Which of the following best describes testing for Javascript?
    //var apiQuestion = ['experiment until the application breaks', 'programmer tests for flaws', 'release without testing and wait for user feedback', 'none of the above'];
    //Which of the following returns true
    //var booleanQuestion = ['NaN', 'undefined', '0', '1'];

    
    
//Question Variable Buttons

//setting ul inside chracter ID
//Create a new div    
    
   listQuizArrayQuestion (); 
    
    //Listing Variables
    //purpose is to create a ul element and attach it to the 
    function listQuizArrayQuestion() {
    var targetElement= document.getElementById('question');
    var ul = document.createElement('ul')
        targetElement.appendChild(ul)
      var arrayQuestion = ['()','[]','{}','<>'];
      for (i = 0; i < arrayQuestion.length; i++) {
          const arrayList= document.createElement("li");
          var list_text = document.createTextNode(arrayQuestion[i]);
          arrayList.appendChild(list_text);
          ul.appendChild(arrayList);
      }

      }
}