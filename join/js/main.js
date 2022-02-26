const feedbackElement = document.getElementById('feedback');
const formElement = document.forms[0];
formElement.addEventListener('Submit', function (e) {
    e.preventDefault();
    feedbackElement.innerHTML = 'Hello ' + formElement.user_fname.value + '! Thank you. We will get back with you as soon as possible!';
    feedbackElement.style.display = "block";
    document.body.classList.toggle('moveDown');
});

function myFunction() {
    document.getElementById('feedback').submit();
}

function processForm(doc) {
    doc.processedForm.results.value = result_str;
    doc.processedForm.Submit1.type = "Submit";
    return;
}

function getSelectedValue(selectObject) {
    return selectObject.options[selectObject.selectedIndex].value
}

function openIT(opt) {
    document.location.href = opt;
}

function validate(theform) {
    if (theform.results.value == "") {
        alert("You have not processed the data yet!");
        return false;
    } else {
        return true;
    }
}