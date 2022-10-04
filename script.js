 function clearScreen(){
  document.getElementById("display").value='';
 }
 function show(value){
  document.getElementById("display").value +=value;
 }
 function calculate(){
  let inputValue = document.getElementById("display").value;
  let ans =eval(inputValue);
  document.getElementById("display").value=ans;
 }

  