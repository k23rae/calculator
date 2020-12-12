/* https://repl.it/join/ybjpmsrm-coachmalika */

$("form").submit(function(e) {
  e.preventDefault();
  var first = $("#first").val();
  var second = $("#second").val();
  var symbols = $("#symbols").val();
  console.log(first);
  console.log(second);
  console.log(symbols);

  if (symbols == "+") {
    console.log("test");
    var ans = add(first, second);
    $("#answer").text(ans.toString());
    }
  if(symbols == "-") {
    var answer = subtract(first, second);
    $("#answer").text(answer);}
  if(symbols == "*") {
    var answer = multiply(first, second);
    $("#answer").text(answer);}
  if(symbols == "/") {
    var answer = divide(first, second);
    $("#answer").text(answer);}
});

function add(x,y) {
  var numberOne = parseInt(x);
  var numberTwo = parseInt(y);
  return(numberOne+numberTwo);
}

function subtract(x,y) {
  var numberOne = parseInt(x);
  var numberTwo = parseInt(y);
  return(numberOne-numberTwo);
}

function multiply(x,y) {
  var numberOne = parseInt(x);
  var numberTwo = parseInt(y);
  return(numberOne*numberTwo);
}

function divide(x,y) {
  var numberOne = parseInt(x);
  var numberTwo = parseInt(y)
  return(numberOne/numberTwo);
}
                 
 function calculate() {
  var firstvalue = document.getElementById("first").value;
  var secondvalue = document.getElementById("second").value;
  var operator = document.getElementById("symbols").value;
  document.getElementById("answer").innerHTML= firstvalue + secondvalue + operator;

  if (operator == "+") {
    var answer = add(firstvalue, secondvalue);
    document.getElementById("answer").innerHTML= answer;
  if(operator == "-") {
    var answer = subtract(firstvalue, secondvalue);
    document.getElementById("answer").innerHTML= answer;
  if(operator == "*") {
    var answer = multiply(firstvalue, secondvalue);
    document.getElementById("answer").innerHTML= answer;
  if(operator == "/") {
    var answer = divide(firstvalue, secondvalue);
    document.getElementById("answer").innerHTML= answer;


  	function dis(val) 
		{ 
			document.getElementById("result").value+=val 
		} 
		
		//function that evaluates the digit and return result 
		function solve() 
		{ 
			let x = document.getElementById("result").value 
			let y = eval(x) 
			document.getElementById("result").value = y 
		} 
		
		//function that clear the display 
		function clr() 
		{ 
			document.getElementById("result").value = " " 
		} 
  }
  }
  }
  }
}                