window.onload = function() {

    // create a couple of elements in an otherwise empty HTML page

 
    //Which set of characters is used to define an array?

    //Which of the following is not an object?
    //var objectQuestion = ['var car = {make: Ford, model: Fiesta}', '[blue, white, yellow]', 'jkfds;jklfsdaj;lkfdsa;jlkdfs;jl', 'ninety-nine'];
    //Which following command allows javascript to run in html?
    //var scriptSrcQuestion = ['style', 'script', 'python', 'code'];
    //Which of the following best describes testing for Javascript?
    //var apiQuestion = ['experiment until the application breaks', 'programmer tests for flaws', 'release without testing and wait for user feedback', 'none of the above'];
    //Which of the following returns true
    //var booleanQuestion = ['NaN', 'undefined', '0', '1'];
      
    
    //Listing Variables
    //purpose is to create a quiz answer list by using the arrayQuestion Array and having buttion inside of the li Icon.
    function listQuizArrayQuestionOne() {
    var targetQuestionOne= document.getElementById('questionOne');
    
    var ul = document.createElement('ul')
        targetQuestionOne.appendChild(ul)


      var arrayQuestion = ['()','[]','{}','<>'];

      for (i = 0; i < arrayQuestion.length; i++) {
        //var addBtn = arrayList.
        //anchor to the next page
        var createLink = document.createElement('a');
        createLink.setAttribute("href", "questionTwo.html");
        //button link
        var createBtn = document.createElement('button');
        var arrayList= document.createElement("li");
          var list_text = document.createTextNode(arrayQuestion[i]);
          //appending all the elements to the ul element

          createLink.appendChild(list_text);
          createBtn.appendChild(createLink);          
          arrayList.appendChild(createBtn);
          ul.appendChild(arrayList);
      }

      }

      listQuizArrayQuestionOne ();

}