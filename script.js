 // web resources that i used for javascript
 // https://www.w3schools.com/js/js_htmldom_nodes.asp
 // https://www.w3schools.com/jsref/met_node_insertbefore.asp
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 

 fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
 .then(
    response => response.json()
 ).then(
    response => {
      // Data from website
       console.log(response)

      // shorting data  
       response.sort(function(a, b) {
         return b.points - a.points; // Sort on the basis of descending points
       });
       
       console.log(response);

       // create more boxes

       for (let l = 8; l < response.length; l++) {
         
         if(response.length > 8) {
          //div creation and naming  
          var newDiv = document.createElement('div');
          newDiv.id = `extrahtml${l+1}`;

          //inserting html
          newDiv.innerHTML = `<div class="main"><div class="main-column"><div class ="main-text">${l+1}</div></div><div class="main-column"><div class = "main-circle"><img class="image${l+1}" src="" width="100px"></div></div><div class="main-column"><div class ="main-text main-center-text" id ="top-scorer-box${l+1}">Sally</div></div><div class="main-column"><div class ="main-text main-right-text score${l+1}">300</div></div></div>`;
          document.body.appendChild(newDiv);

         }
       }
       
       for(let i = 0 ; i < response.length ; i++) {
          // fetech data from array response

          //name
         var playerName = response[i].name;
         var newPlayerName = document.getElementById(`top-scorer-box${i+1}`);
         newPlayerName.innerHTML = playerName;

         //image
         document.getElementsByClassName(`image${i+1}`)[0].src = response[i].avatar;

         // score

         if(i>2) {
           document.getElementsByClassName(`score${i+1}`)[0].innerHTML = response[i].points;
         }
       }
    }
   )



