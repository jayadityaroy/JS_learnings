const btn = document.getElementById("random-btn");

btn.onclick = function () {
    const randomColorNumber = Math.floor(Math.random() * 16777215); // Generate a random number between 0 and 16777215 (the range of colors in hexadecimal)
    const randomColorHex = "#" + randomColorNumber.toString(16).padStart(6, "0"); // Convert the random number to a hexadecimal string and prepend it with a "#" to form a valid color code
    document.getElementById("colourName").innerText = "Colour Name: " + randomColorHex;
    document.body.style.backgroundColor = randomColorHex; // Change the background color of the body to the random color
}