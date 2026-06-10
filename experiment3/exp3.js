document.getElementById("changeText").addEventListener("click", function() {
    document.getElementById("heading").innerHTML = "Text Changed!";
});


document.getElementById("changeColor").addEventListener("click", function() {
    document.getElementById("para").style.color = "red";
});


document.getElementById("hide").addEventListener("click", function() {
    document.getElementById("para").style.display = "none";
});


document.getElementById("show").addEventListener("click", function() {
    document.getElementById("para").style.display = "block";
});


document.getElementById("box").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
    this.innerHTML = "Mouse Over!";
});


document.getElementById("box").addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightblue";
    this.innerHTML = "Hover Me";
});


document.getElementById("inputBox").addEventListener("keyup", function() {
    document.getElementById("display").innerHTML = "You typed: " + this.value;
});