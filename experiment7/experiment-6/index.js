
function changeHeading() {
    let input = document.getElementById("changeHeading").value;
    let heading = document.getElementById("heading");

    if (input.trim() !== "") {
        heading.innerText = input;
    } else {
        alert("Please enter some text!");
    }
}

function changeBackground() {
    let colors = ["red", "blue", "green", "yellow", "pink", "lightgray"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function increaseFontSize() {
    let heading = document.getElementById("heading");
    let currentSize = window.getComputedStyle(heading).fontSize;
    let newSize = parseFloat(currentSize) + 5;
    heading.style.fontSize = newSize + "px";
}

function decreaseFontSize() {
    let heading = document.getElementById("heading");
    let currentSize = window.getComputedStyle(heading).fontSize;
    let newSize = parseFloat(currentSize) - 5;
    heading.style.fontSize = newSize + "px";
}

function showHideProgram() {
    let para = document.getElementById("program");

    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}

function reset() {
    document.getElementById("heading").innerText = "Welcome to JavaScript";
    document.body.style.backgroundColor = "white";
    document.getElementById("heading").style.fontSize = "24px";
    document.getElementById("program").style.display = "none";
    document.getElementById("changeHeading").value = "";
}