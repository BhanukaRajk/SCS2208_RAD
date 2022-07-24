function showtime(item) {

    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();

    if (min < 10) {
        if (hour > 12) {
            document.getElementById("time").innerHTML = "Now the time is " + hour - 12 + ":0" + min + "PM";
        }
        else {
            document.getElementById("time").innerHTML = "Now the time is " + hour + ":0" + min + "AM";
        }
    } else {
        if (hour > 12) {
            document.getElementById("time").innerHTML = "Now the time is " + hour - 12 + ":" + min + "PM";
        }
        else {
            document.getElementById("time").innerHTML = "Now the time is " + hour + ":" + min + "AM";
        }
    }

    if (min == 0) {
        item.innerHTML = "Remains " + (24 - hour) + " hours more";
    }
    else {
        item.innerHTML = "Remains " + (23 - hour) + " hours and " + (60 - min) + " minutes more";
    }
}