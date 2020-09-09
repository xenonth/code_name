window.onload = function () {
    
    function listQuizArrayQuestionFour() {
      var targetQuestionFour= document.getElementById('questionFive');
      
      var ul = document.createElement('ul')
          targetQuestionFour.appendChild(ul)
    
    
    
         var booleanQuestion = ['NaN', 'undefined', '0', '1'];
    
        for (i = 0; i < booleanQuestion.length; i++) {
          //var addBtn = arrayList.
          //anchor to the next page
          var createLink = document.createElement('a');
          createLink.setAttribute("href", "result.html");
          //button link
          var createBtn = document.createElement('button');
          var arrayList= document.createElement("li");
            var list_text = document.createTextNode(booleanQuestion[i]);
            //appending all the elements to the ul element
    
            createLink.appendChild(list_text);
            createBtn.appendChild(createLink);          
            arrayList.appendChild(createBtn);
            ul.appendChild(arrayList);
        }
    
      }
      listQuizArrayQuestionFour ();
    }