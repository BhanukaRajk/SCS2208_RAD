function Alert() {
    let Name = document.getElementById("name").value;
    let BDay = document.getElementById("bday").value;

    if (Name != "" && BDay != "") {
        alert("Birth day: " + BDay); }
  }