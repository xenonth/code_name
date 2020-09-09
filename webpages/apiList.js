window.onload = function () {
    
    function listQuizArrayQuestionThree() {
      var targetQuestionFour= document.getElementById('questionFour');
      
      var ul = document.createElement('ul')
          targetQuestionFour.appendChild(ul)
    
    
    
          var apiQuestion = ['experiment until the application breaks', 'programmer tests for flaws', 'release without testing and wait for user feedback', 'none of the above'];
    
        for (i = 0; i < apiQuestion.length; i++) {
          //var addBtn = arrayList.
          //anchor to the next page
          var createLink = document.createElement('a');
          createLink.setAttribute("href", "questionFour.html");
          //button link
          var createBtn = document.createElement('button');
          var arrayList= document.createElement("li");
            var list_text = document.createTextNode(apiQuestion[i]);
            //appending all the elements to the ul element
    
            createLink.appendChild(list_text);
            createBtn.appendChild(createLink);          
            arrayList.appendChild(createBtn);
            ul.appendChild(arrayList);
        }
    
      }
      listQuizArrayQuestionThree ();
    }