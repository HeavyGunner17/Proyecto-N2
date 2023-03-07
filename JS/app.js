function validatePreviousLogin() {
    const getloggeduser = localStorage.getItem('loggedUser')
    const loggeduser = JSON.parse(getloggeduser)
    if (localStorage.getItem('loggedUser')) {
        document.getElementById('navbar-login').innerHTML = `
        <div class="dropdown">
        <a class="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown">${loggeduser.user}</a>  
        <ul class="dropdown-menu">
        <li class="dropdown-user"><a class="dropdown-item" href="#">View Profile</a></li>
        <li class="dropdown-user"><a class="dropdown-item" href="#" onclick="logout()">Logout</a></li>
        </ul>
        </div>`
    } else {
        document.getElementById('navbar-login').innerHTML = `
        <a class="nav-link text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>`
    }
}
validatePreviousLogin()

function loadUsers() {
    const users = [{
        id: 1,
        username: "rodri8935",
        email: "rodrigo8935@gmail.com",
        password: "rodrigo123",
        estado: "pendiente"
    }, {
        id: 2,
        username: "macacorrea715",
        email: "macacorrea715@gmail.com",
        password: "maca715unodos",
        estado: "pendiente"
    }, {
        id: 3,
        username: "liomessi",
        email: "liomessi@gmail.com",
        password: "quemirabobo",
        estado: "pendiente"
    },
    {
        id: 4,
        username: "robert17",
        email: "robert17@hotmail.com",
        password: "robert96",
        estado: "aprobado"
    },
    {
        id: 5,
        username: "pepino25",
        email: "pepipes@gmail.com",
        password: "pepino98",
        estado: "aprobado"

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
            const loggedIn = {
                user: isValidMail,
            }
            const loggedInUser = JSON.stringify(loggedIn)
            localStorage.setItem('loggedUser', loggedInUser)
            redirect("admin")
        }
        else if (userList.find(({ username }) => username === isValidMail)) {
            const enteredUser = userList.find(({ username }) => username === isValidMail)
            if ((enteredUser.username == isValidMail && enteredUser.password == isValidPass && enteredUser.estado == 'aprobado')) {
                const loggedIn = {
                    user: isValidMail,
                }
                const loggedInUser = JSON.stringify(loggedIn)
                localStorage.setItem('loggedUser', loggedInUser)

                alert('Successful login')
                redirect('user')
            } else {
                alert('Wrong Password or user is not allowed')
            }
        }
        else {
            alert('The user does not exist')
        }
    }
    else if (type == "create") {
        event.preventDefault()
        let newUser = document.getElementById("newUsername").value
        let newUserPass = document.getElementById("newPassword").value
        let newUserPassConfirm = document.getElementById("confirm").value
        let newMail = document.getElementById("userEmail").value
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

            alert('User creation was successful')
            newUser = document.getElementById("newUsername").value = ''
            newUserPass = document.getElementById("newPassword").value = ''
            newUserPassConfirm = document.getElementById("confirm").value = ''
            newMail = document.getElementById("userEmail").value = ''
            document.getElementById('closeModal').click()
        } else {
            alert("The passwords are different")
        }
    } else {
        alert("There has been an error.")
    }
}


function logout(){
    localStorage.removeItem('loggedUser')
    location.reload()
}