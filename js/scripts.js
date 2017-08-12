$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var saySomething= function(whatToSay){
    alert(whatToSay);
    };

    var multiply=function(number1,number2){
    return number1*number2;
    };

    var divide=function(number1,number2){
    return number1/number2;
    };

    var remainder = function(number1,number2){
    return number1% number2;
    };

    var add=function(number1,number2){
    return number1+number2;
    };

    var subtract=function(number1,number2){
    return number1-number2;
    };

    var celsiusToFahrenheit=function(number1){
      return number1*1.8+32;
    };

    var fahrenheitToCelsius=function(number1){
      return (number1-32)/1.8;
    };

    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
    $("#output").text(result);

  });
});
