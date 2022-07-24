function AlertAGE() {
    let Name = document.getElementById("name").value;
    let BDay = document.getElementById("bday").value;

    if (Name != "" && BDay != "") {
        const cdate = new Date();
        const bdate = new Date(document.getElementById("bday").valueAsDate);
        let CY = cdate.getFullYear();
        let CM = cdate.getMonth();

        let BY = bdate.getFullYear();
        let BM = bdate.getMonth();

        if (CM > BM) {
            alert("Age: " + (CY - BY) + " years and " + (CM - BM) + " months.");
        }
        else {
            alert("Age: " + (CY - BY - 1) + " years and " + (12 + CM - BM) + " months.");
        }
    }
}