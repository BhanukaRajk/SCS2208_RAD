function Alert() {
    let Name = document.getElementById("name").value;
    let Hometown = document.getElementById("hometown").value;

    if (Name != "" && Hometown != "") {
        alert("Name: " + Name + "\nHome town: " + Hometown); }
  }