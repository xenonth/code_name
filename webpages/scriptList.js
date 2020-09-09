window.onload = function () {
    
    function listQuizArrayQuestionThree() {
      var targetQuestionTwo= document.getElementById('questionThree');
      
      var ul = document.createElement('ul')
          targetQuestionTwo.appendChild(ul)
    
    
    
          var scriptSrcQuestion = ['style', 'script', 'python', 'code'];
    
        for (i = 0; i < scriptSrcQuestion.length; i++) {
          //var addBtn = arrayList.
          //anchor to the next page
          var createLink = document.createElement('a');
          createLink.setAttribute("href", "questionFour.html");
          //button link
          var createBtn = document.createElement('button');
          var arrayList= document.createElement("li");
            var list_text = document.createTextNode(scriptSrcQuestion[i]);
            //appending all the elements to the ul element
    
            createLink.appendChild(list_text);
            createBtn.appendChild(createLink);          
            arrayList.appendChild(createBtn);
            ul.appendChild(arrayList);
        }
    
      }
      listQuizArrayQuestionThree ();
    }