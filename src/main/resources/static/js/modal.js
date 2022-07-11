function modal_form_setting(form, id) {
    fetch("/api/user/" + id)
        .then(response => response.json())
        .then(content => {
            form.elements.id.value = content.id;
            form.elements.login.value = content.login;
            form.elements.password.value = content.password;
            form.elements.firstname.value = content.firstname;
            form.elements.lastName.value = content.lastName;
            form.elements.age.value = content.age;
            form.elements.email.value = content.email;
        });
}
function modalEdit(id) {
    let form = document.getElementById("editForm");
    modal_form_setting(form, id);
}
function modalDelete(id) {
    let form = document.getElementById("deleteForm");
    modal_form_setting(form, id);
}