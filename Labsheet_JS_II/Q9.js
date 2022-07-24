function GetResult() {
    let mark = document.getElementById("mark").value;
    let sub = document.getElementById("subject").value;

    if (mark >= 35 && mark <= 100) {
        document.getElementById("results").innerHTML = "Subject PASSED: Congratulations! you have passed this subject!";
    } else {
        document.getElementById("results").innerHTML = "Subject FAILED: Sorry! you have to work hard for <b>" + sub + "</b> subject...";
    }
}