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
    let data = localStorage.getItem('users')
    if (!data) {
        const users = [{
            id: 0,
            username: "admin",
            email: "admin17@gmail.com",
            password: "admin123",
            estado: "aprobado",
            securityQuestion: "What is your favorite color?",
            securityAnswer: "blue"
        }, {
            id: 1,
            username: "rodri8935",
            email: "rodrigo8935@gmail.com",
            password: "rodrigo123",
            estado: "pendiente",
            securityQuestion: `What is your dog's name?`,
            securityAnswer: `Oliver`
        }, {
            id: 2,
            username: "macacorrea715",
            email: "macacorrea715@gmail.com",
            password: "maca715unodos",
            estado: "pendiente",
            securityQuestion: `What is your dog's name?`,
            securityAnswer: `Mora`
        }, {
            id: 3,
            username: "liomessi",
            email: "liomessi@gmail.com",
            password: "quemirabobo",
            estado: "pendiente",
            securityQuestion: `What is your cat's name?`,
            securityAnswer: `Rosa`
        },
        {
            id: 4,
            username: "robert17",
            email: "robert17@hotmail.com",
            password: "robert96",
            estado: "aprobado",
            securityQuestion: `What is your cat's name?`,
            securityAnswer: `Maia`
        },
        {
            id: 5,
            username: "pepino25",
            email: "pepipes@gmail.com",
            password: "pepino98",
            estado: "aprobado",
            securityQuestion: `What is your mother's name?`,
            securityAnswer: `Mary`
        }]
        const usersToLoad = JSON.stringify(users)
        localStorage.setItem('users', usersToLoad)
    } else {
        return;
    }
}
loadUsers()
function getNewId() {
    let userData = JSON.parse(localStorage.getItem('users'))
    let currentIds = []
    for (let i = 0; i < userData.length; i++) {
        const element = userData[i].id;
        currentIds.push(element)
    }
    return numeroDiferente(currentIds)
}
function numeroDiferente(array) {
    let numero = 1;
    while (array.includes(numero)) {
        numero++;
    }
    return numero;
}
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
        let newSecurityQuestion = document.getElementById("securityQuestion").value
        let newSecurityAnswer = document.getElementById("securityAnswer").value
        if (newUserPass == newUserPassConfirm) {
            const user =
            {
                username: newUser,
                email: newMail,
                password: newUserPass,
                securityQuestion: newSecurityQuestion,
                securityAnswer: newSecurityAnswer,
                status: "pendiente",
                id: getNewId()
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
            console.log(user,'variable usuario')
            console.log(JSON.parse(localStorage.getItem('users')))
        } else {
            alert("The passwords are different")
        }
    } else {
        alert("There has been an error.")
    }
}


function logout() {
    localStorage.removeItem('loggedUser')
    location.reload()
}