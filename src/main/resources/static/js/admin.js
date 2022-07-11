function admin_table() {
    let tab =  document.getElementById("js-tab-admin");
    let innerHTML = `
 <div class="inner-admin-panel border" id="admin_table">
    <h6>All Users</h6>
    <div class="bg-white">
        <table class="table table-striped caption-top">
        <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Login</th>
                <th>Age</th>
                <th>Email</th>
                <th>Roles</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
`;
    fetch("/api/get_users_table")
        .then(response => response.json())
        .then(table => {
            for (let n in table) {
                let user = table[n];
                console.log(user)
                let user_roles = "";
                for (let i in user.authorities) {
                    user_roles += user.authorities[i].role + " ";
                }
                innerHTML += `
<tr>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.login}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>${user_roles}</td>
    <td>
        <a class="btn btn-info"  href="#" id="${user.id}" type="button" data-toggle="modal" data-target="#editingModal" onclick="modalEdit(${user.id})">Edit</a>
    </td>
    <td>
        <a class="btn btn-danger" href="#" type="button" data-toggle="modal" data-target="#deletingModal" onclick="modalDelete(${user.id})">Delete</a>
    </td>
</tr>
                        `;

            }
            innerHTML+="</table>";
            tab.innerHTML = innerHTML;
        });

    document.getElementById("tab-2").classList.remove("active");
    document.getElementById("tab-1").classList.add("active");
}
function add_user_form() {
    let tab =  document.getElementById("js-tab-admin");
    let innerHTML = `
<div class="inner-admin-panel-add border">
    <h6>Add new user</h6>
    <div class="border">
        <form method="get" action="#" onsubmit="fetch_add(this); return false;" id="js_new_user_form">
            <div class="form-group">
                <label>Login</label>
                <input type="text" class="form-control" name="login" >
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="text" class="form-control" name="password" >
            </div>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" name="firstName" >
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" name="lastName" >
            </div>
            <div class="form-group">
                <label>Age</label>
                <input type="number" class="form-control" name="age" >
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" name="email" >
            </div>
            <div class="form-group">
                <label for="authorities">Roles</label>
                <select multiple class="form-control" name="authorities" id="authorities">
                    <option value="ROLE_USER" selected>USER</option>
                    <option value="ROLE_ADMIN">ADMIN</option>
                </select>
            </div>
            <input type="submit" class="btn btn-success btn-lg" value="Add new user">
        </form>
    </div>
</div>`;
    tab.innerHTML = innerHTML;
    document.getElementById("tab-1").classList.remove("active");
    document.getElementById("tab-2").classList.add("active");
}

function change_admin_tab(tab_id) {
    if (tab_id == 2) {
        add_user_form();
    }
    if (tab_id == 1) {
        admin_table();
    }
}