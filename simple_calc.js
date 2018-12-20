var num1=document.getElementById('input1'); 
var num2=document.getElementById('input2');

var result = document.getElementById("result");
var addvar=document.getElementById('addbtn');
var subtractvar=document.getElementById('subtractbtn');
var multiplyvar=document.getElementById('multiplybtn');
var dividevar=document.getElementById('dividebtn');



addvar.addEventListener("click", function(){
var firstNum = parseInt(num1.value);
var secondNum = parseInt(num2.value);
  result.value = firstNum + secondNum; 
  console.log( firstNum + secondNum);
});

subtractvar.addEventListener("click", function(){
var firstNum = parseInt(num1.value);
var secondNum = parseInt(num2.value);
  result.value = firstNum - secondNum;
  console.log( firstNum + secondNum);
});

multiplyvar.addEventListener("click", function(){
var firstNum = parseInt(num1.value);
var secondNum = parseInt(num2.value);
  result.value = firstNum * secondNum;
  console.log( firstNum * secondNum );
});

dividevar.addEventListener("click", function(){
var firstNum = parseInt(num1.value);
var secondNum = parseInt(num2.value);
  result.value = firstNum / secondNum;
  console.log( firstNum / secondNum );
});


