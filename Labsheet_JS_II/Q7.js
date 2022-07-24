function changeothers(changedbox) {
    var boxset = document.getElementsByClassName("cbox");
    var cdbox = document.getElementById(changedbox.id)

    if (cdbox.checked) {
        for (var i = 0; i < boxset.length; i++) {
            if (boxset[i].checked) {
                boxset[i].disabled = false;
            }
            else {
                boxset[i].disabled = true;
            }
        }
    }
    else {
        for (var i = 0; i < boxset.length; i++) {
            boxset[i].disabled = false;
        }
    }
}