function validateForm() {
    
    // let formEmail = document.forms["email"]["response"].value;
    // let formName = document.forms["name"]["response"].value;

    var formfields = ['response', 'email', 'name'];
    for(var i = 0; i < formfields.length; i++) {
        let formResponse = document.forms["rsvp"][formfields[i]].value;
        if (formResponse == "") {
            console.log(formfields[i])
            alert("no");
            showValidation(formfields[i])
            return false;
        }
    }
    alert("stop");

    return false;
    // document.getElementById("regForm").submit();
}

function showValidation(id) {
    var div = document.getElementById("validate-" + id);
    div.style.display = "block";
}