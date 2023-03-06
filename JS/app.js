
function redirect(moveTo) {
    switch (moveTo) {
        case "admin":
            window.location.href = "../Paginas/administración.html"
            break;
        case "user":
            window.location.href = "../index.html"

            break;

        default:
            break;
    }
}

function validate(event, type) {
    if (type == "login") {
        const isValidMail = document.getElementById("username").value
        const isValidPass = document.getElementById("password").value
        event.preventDefault()
        if (isValidMail == "admin" && isValidPass == "admin123") {
            redirect("admin")
        } else {
            redirect("user")
            console.log("else")
        }
    } else if (type == "create") {

        event.preventDefault()
        const newUser = document.getElementById("newUsername").value
        const newUserPass = document.getElementById("newPassword").value
        const newUserPassConfirm = document.getElementById("confirm").value
        const newMail = document.getElementById("userEmail").value
        if (newUserPass == newUserPassConfirm) {
            const user = [
                {
                    user: newUser,
                    mail: newMail,
                    password: newUserPass,
                }
            ]
            const userJSON = JSON.stringify(user)
            localStorage.setItem('user', userJSON)
            console.log(localStorage.getItem("user"))
        } else {
            alert("The passwords are different")
        }
    } else {
        alert("There has been an error.")
    }
}


