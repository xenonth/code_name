window.onload = function () {

    function listQuizArrayQuestionTwo() {
      var targetQuestionTwo= document.getElementById('questionTwo');
      
      var ul = document.createElement('ul')
          targetQuestionTwo.appendChild(ul)
    
    
    
          var objectQuestion = ['var car = {make: Ford, model: Fiesta}', '[blue, white, yellow]', 'jkfds;jklfsdaj;lkfdsa;jlkdfs;jl', 'ninety-nine'];
    
        for (i = 0; i < objectQuestion.length; i++) {
          //var addBtn = arrayList.
          //anchor to the next page
          var createLink = document.createElement('a');
          createLink.setAttribute("href", "questionThree.html");
          //button link
          var createBtn = document.createElement('button');
          var arrayList= document.createElement("li");
            var list_text = document.createTextNode(objectQuestion[i]);
            //appending all the elements to the ul element
    
            createLink.appendChild(list_text);
            createBtn.appendChild(createLink);          
            arrayList.appendChild(createBtn);
            ul.appendChild(arrayList);
        }
    
      }
      listQuizArrayQuestionTwo ();
    }