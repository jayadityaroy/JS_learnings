console.log("DOM Example");

const btn = document.getElementById("magic-btn"); // Scan through the active DOM tree (of index.html), find the element that has the ID magic-btn
console.log(btn);

btn.onclick = function git() {
    console.log("Button clicked!");
    document.getElementById("text").innerText = "Button was clicked!"; // scan through the active DOM tree (of index.html), find the element that has the ID: text, and change its inner text to "Button was clicked!"
}
