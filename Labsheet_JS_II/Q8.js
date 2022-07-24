function calculate() {
    let Amount = document.getElementById("amount").value;
    document.getElementById("results").innerHTML = "20% of the value: " + Amount * 0.2 + "<br>Total: " + Amount + " + " + Amount * 0.2 + " = " + Amount * 1.2;
}