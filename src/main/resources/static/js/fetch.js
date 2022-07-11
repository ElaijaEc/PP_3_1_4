function fetch_add() {
    let formdata = $("#js_new_user_form").serialize();
    let url = "/api/add_user?" + formdata;
    fetch(url)
        .then((response) => {
            change_admin_tab(1);
        })
        .catch(function (err) {
            console.error('Fetch Error :-S', err);
        });
}
function fetch_delete(id) {
    let url = "/api/delete_user/" + id;
    fetch(url)
        .then((response) => {
            $("#deletingModal").modal("hide");
            change_admin_tab(1);
        })
        .catch(function (err) {
            console.error('Fetch Error :-S', err);
        });
}
function fetch_edit(id) {
    let formdata = $("#editForm").serialize();
    let url = "/api/edit_user/" + id + "/?" + formdata;
    fetch(url)
        .then((response) => {
            $("#editingModal").modal("hide");
            change_admin_tab(1);
        })
        .catch(function (err) {
            console.error('Fetch Error :-S', err);
        });
}