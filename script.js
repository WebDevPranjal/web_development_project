// fetch data from website

let count = 0;
fetch("https://www.coursehubiitg.in/api/codingweek/contributions")
.then(function(response){
return response.json();
})
.then(function(products){
let placeholder = document.querySelector("#data-output");
let out = "";
for(let product of products){
    count = count + 1;
  out += `
     <tr>
        <td>${count}</td>
        <td><div class ="photo"><img src='${product.avatar}' width='100px'></div></td>
        <td class="name">${product.name}</td>
        <td>${product.points}</td>
     </tr>
  `;
}

placeholder.innerHTML = out;
});
