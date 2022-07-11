function loginform() {
    document.getElementById("login_page").classList.remove("d-none");
}
function loginform_hide() {
    document.getElementById("login_page").classList.add("d-none");
}
function get_login() {
    fetch("/api/get_login", {
        credentials: "include",
    })
        .then((response) => response.json())
        .then(current_user_data => {
            if (current_user_data.login != null) {
                current_user = current_user_data;
                for (let n in current_user.authorities) {
                    roles.push(current_user.authorities[n].role)
                }
                getBasePage()
            } else {
                loginform();
            }
        })
        .catch((err) => console.log(err))
        .catch((err) => console.log(err))
}
function set_login() {
    let data = $("#login_form").serialize();
    fetch("/api/login", {
        method: "post",
        credentials:"include",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
        },
        body: data
    })
        .then(response => {
            loginform_hide();
            get_login();
        })
        .catch((reason) => alert(reason))
}