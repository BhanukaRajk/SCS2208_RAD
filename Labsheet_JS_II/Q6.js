function sqrroot() {
    let Value = document.getElementById("number").value;

    if (Value >= 0) {
        alert("Square root of " + Value + " is " + Math.sqrt(Value));
    }
    else {
        alert("Invalid input! Please enter valid input");
    }
}