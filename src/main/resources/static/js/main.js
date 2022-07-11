let current_user = null;
let roles = [];
window.onload = getBasePage();
function getBasePage() {
    if (current_user != null) {
        header_and_nav();
        if (roles.indexOf("ROLE_ADMIN") != -1) {
            get_admin_panel();
        } else {
            get_user_page();
        }
    } else {
        get_login();
    }
}
function get_user_page() {
    document.getElementById("current_user_info").innerHTML = `
            <td>${current_user.id}</td>
            <td>${current_user.firstName}</td>
            <td>${current_user.lastName}</td>
            <td>${current_user.login}</td>
            <td>${current_user.age}</td>
            <td>${current_user.email}</td>
            <td>${roles}</td>
                    `;
    document.getElementById("admin_page").classList.add("d-none");
    document.getElementById("user_page_tab").classList.add("active");
    document.getElementById("admin_page_tab").classList.remove("active");
    document.getElementById("user_page").classList.remove("d-none");
}
function get_admin_panel() {
    document.getElementById("admin_page").classList.remove("d-none");
    document.getElementById("admin_page_tab").classList.add("active")
    document.getElementById("user_page").classList.add("d-none");
    document.getElementById("user_page_tab").classList.remove("active");
    change_admin_tab(1);
}
function header_and_nav() {
    document.getElementById("after_login").classList.remove("d-none");
    document.getElementById("current_roles").innerText = roles;
    document.getElementById("current_username").innerText = current_user.username;
    if (roles.indexOf("ROLE_ADMIN") == -1) {
        document.getElementById("admin_page_tab").classList.add("d-none");
    }
}