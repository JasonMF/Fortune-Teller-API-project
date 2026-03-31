let output=document.querySelector(".output");
let image= document.querySelector("img");
let ball = document.querySelector(".ball");
let answer = "";
let textbox= document.getElementById("input");

fetch("https://yesno.wtf/api")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
   
  console.log(data);  
   answer=data.answer;
    output.innerHTML ="";
   
  });

  ball.addEventListener("click", function(){
 if(textbox.value.length > 0){
    output.innerHTML = answer;
 }
  }) 

  