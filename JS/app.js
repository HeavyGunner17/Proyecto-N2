function loadUsers() {
    const users = [{
        username: "rodri8935",
        email: "rodrigo8935@gmail.com",
        password: "rodrigo123"
    }, {
        username: "macacorrea715",
        email: "macacorrea715@gmail.com",
        password: "maca715unodos"
    }, {
        username: "liomessi",
        email: "liomessi@gmail.com",
        password: "quemirabobo"
    }]

    const usersToLoad = JSON.stringify(users)
    localStorage.setItem('users', usersToLoad)
    console.log(localStorage.getItem('users'), 'datos localstorage')
}

loadUsers()





function redirect(moveTo) {
    switch (moveTo) {
        case "admin":
            window.location.href = "./Paginas/administración.html"
            break;
        case "user":
            window.location.href = "./index.html"
            break;
        default:
            break;
    }
}

function validate(event, type) {
    if (type == "login") {
        const isValidMail = document.getElementById("username").value
        const isValidPass = document.getElementById("password").value
        let userListJSON = localStorage.getItem('users')
        let userList = JSON.parse(userListJSON)
        event.preventDefault()
        if (isValidMail == "admin" && isValidPass == "admin123") {
            redirect("admin")
        }
        else if (userList.find(({ username }) => username === isValidMail)) {
            const enteredUser = userList.find(({ username }) => username === isValidMail)
            console.log(enteredUser)
            if ((enteredUser.username == isValidMail && enteredUser.password == isValidPass) || (isValidMail == enteredUser.email && isValidPass == enteredUser.password)) {
                alert('Login exitoso como usuario')
                redirect('user')
            } else {
                alert('mal ingreso de contraseña')
            }
        }
        else {
            alert('there has been an error while signing in')
        }
    }
    else if (type == "create") {
        event.preventDefault()
        const newUser = document.getElementById("newUsername").value
        const newUserPass = document.getElementById("newPassword").value
        const newUserPassConfirm = document.getElementById("confirm").value
        const newMail = document.getElementById("userEmail").value
        if (newUserPass == newUserPassConfirm) {
            const user =
            {
                username: newUser,
                email: newMail,
                password: newUserPass,
            }
            let userListJSON = localStorage.getItem('users')
            let userList = JSON.parse(userListJSON)
            userList.push(user)
            let newUserList = JSON.stringify(userList)
            localStorage.setItem('users', newUserList)
            
            const myModal = new bootstrap.Modal('#exampleModal')
            console.log(myModal)
            myModal.dispose()
            alert('usuario creado con exito')
        } else {
            alert("The passwords are different")
        }
    } else {
        alert("There has been an error.")
    }
}


