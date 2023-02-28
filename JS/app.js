
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

function validate(event) {
    const isValidMail = document.getElementById("username").value
    const isValidPass = document.getElementById("password").value
    event.preventDefault()
    if (isValidMail == "admin" && isValidPass == "admin123") {
        redirect("admin")
    } else {
        redirect("user")
        console.log("else")
    }
}


