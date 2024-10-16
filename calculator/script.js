// Clear the screen
function clearScreen() {
    document.getElementById("result").value = "";
}

// Append a value to the screen
function appendToScreen(value) {
    document.getElementById("result").value += value;
}

// Delete the last character
function deleteChar() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

// Perform the calculation
function calculate() {
    let expression = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(expression);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
