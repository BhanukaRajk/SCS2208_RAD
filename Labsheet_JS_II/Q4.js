function AreaCal() {
    let Height = document.getElementById("height").value;
    let Width = document.getElementById("width").value;

    if (Height >= 0 && Width >= 0) {
        document.getElementById("area").innerHTML = "Area of the rectangle is " + Height * Width + "cm<sup>2</sup>";
    }
    else {
        alert("Please enter valid number for value!")
    }
}