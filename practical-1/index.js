let factorial = 1;

function calculateFactorial() {
    let number = document.getElementById("number").value;
    if (number < 0) {
        alert("Please enter a non-negative integer.");
        return;
    }
    factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById("result").innerText = `Factorial of ${number} is ${factorial}`;
}