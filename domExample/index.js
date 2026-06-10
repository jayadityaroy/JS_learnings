console.log("DOM Example");

const heading = document.getElementById("magic-btn"); // Scan through the active DOM tree (of index.html), find the element that has the ID magic-btn
console.log(heading);

heading.onclick = function () {
    console.log("Button clicked!");
    document.getElementById("text").innerText = "Button was clicked!";
}
