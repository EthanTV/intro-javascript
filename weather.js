<!DOCTYPE html>
<html> lang=en



let temperature = Number(prompt("what is the temperature?"));

function myFunction(){
    var temperature = document.getElementById("temp").value;
    //creating temperature variable input

    //given the temperature is greater than 40 degrees
      if (temperature >=40) {
             alert("Avoid tight fitting clothes, stay hydrated and stay in the shade.");
         } else if (temperature >=39 && temperature <=20) {
             alert("wear shorts, shades and sunblock.");
         } else if (temperature >=19 && temperature <=10) {
             alert("jeans and jacket weather")
         } else if (temperature <=10 && temperature >=1) {
             alert("wear a rain jacket and pack an umbrella");
         } else if(temperature >=-10 && temperature <=1);
            alert("layer up and dress warmly");
         }  else {
             alert("not a valid weather condition")
         }
    }
</html>