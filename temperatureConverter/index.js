let conversionType = document.getElementById("conversionType"); // the dropdown menu for selecting the conversion type (Celsius to Fahrenheit or Fahrenheit to Celsius)
let temperatureInput = document.getElementById("temperatureInput"); // the input field where the user enters the temperature value to be converted
let convertBtn = document.getElementById("convertBtn"); // the button that triggers the conversion

convertBtn.onclick = function () { // when the convert button is clicked, this function will be executed
    let inputTemperature = parseFloat(temperatureInput.value); // parse the value entered in the temperature input field as a floating-point number
    // if the input temperature is not a number (NaN), display an error message and return from the function
    if (isNaN(inputTemperature)) {
        document.getElementById("result").innerText = "Please enter a valid temperature.";
        return;
    }
    // perform the conversion based on the selected conversion type and display the result
    (conversionType.value === "CtF")? 
    document.getElementById("result").innerText = `${inputTemperature}°C is equal to ${(inputTemperature * 9/5 + 32).toFixed(2)}°F` :
    document.getElementById("result").innerText = `${inputTemperature}°F is equal to ${((inputTemperature - 32) * 5/9).toFixed(2)}°C`
}