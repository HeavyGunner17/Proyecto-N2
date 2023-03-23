function validatePreviousLogin() {
    const getloggeduser = localStorage.getItem('loggedUser')
    const loggeduser = JSON.parse(getloggeduser)
    if (getloggeduser) {
        if (loggeduser.user === "admin") {
            document.getElementById('navbar-login').innerHTML = `
          <div class="dropdown">
          <a class="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown">${loggeduser.user}</a>  
          <ul class="dropdown-menu">
          <li class="dropdown-user"><a class="dropdown-item" href="./Paginas/error404.html">View Profile</a></li>
          <li class="dropdown-user"><a class="dropdown-item" href="./Paginas/adminUsers.html">User Admin.</a></li>
          <li class="dropdown-user"><a class="dropdown-item" href="./Paginas/administración.html">Games Admin.</a></li>
          <li class="dropdown-user"><a class="dropdown-item" href="#" onclick="confirmLogout()">Logout</a></li>
          </ul>
          </div>`
        } else {
            document.getElementById('navbar-login').innerHTML = `
          <div class="dropdown">
          <a class="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown">${loggeduser.user}</a>  
          <ul class="dropdown-menu">
          <li class="dropdown-user"><a class="dropdown-item" href="./Paginas/error404.html">View Profile</a></li>
          <li class="dropdown-user"><a class="dropdown-item" href="#" onclick="confirmLogout()">Logout</a></li>
          </ul>
          </div>`
        }
    } else {
        document.getElementById('navbar-login').innerHTML = `
          <a class="nav-link text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>`
    }
}
validatePreviousLogin()




function getPreloadedGames() {
    let previousLoadedGames = localStorage.getItem('juegos')
    if (!previousLoadedGames) {
        let preloadedGames = [{
            codigo: 35195,
            nombre: 'Civilization VI',
            category: 'Strategy',
            descripcion: 'Civilization VI is the new installment of the award-winning franchise Civilization',
            publicado: 'YES',
        }, {
            codigo: 70235,
            nombre: 'Warcraft III',
            category: 'Strategy',
            descripcion: 'Real-time strategy created by Blizzard Entertainment and is its third installment',
            publicado: 'YES',
        },
        {
            codigo: 195702,
            nombre: 'Crusader Kings II',
            category: 'Strategy',
            descripcion: 'Explore one of the decisive periods of history in a unique experience',
            publicado: 'YES',
        }, {
            codigo: 35702,
            nombre: 'Europa Universalis IV',
            category: 'Strategy',
            descripcion: 'Developed by Paradox Development Studio and published by Paradox Interactive',
            publicado: 'YES',
        }]
        let jsonGameList = JSON.stringify(preloadedGames)
        localStorage.setItem('juegos', jsonGameList)
    } else {
        return
    }

}

getPreloadedGames()

function loadPreloadedGames() {
    let listaJuegos = JSON.parse(localStorage.getItem('juegos'))
    let secondaryGames = document.getElementById('secondary-games')

    listaJuegos.forEach(element => {
        secondaryGames.innerHTML += `
      <div class="col-lg-3 col-md-6   text-light game-card p-1">
      <div class="card text-white d-block">
        <img src="./IMG/${element.nombre}.jpg" class="card-img-top h-50" alt="...">
      </div>
      <div class="card-body overlay">
        <h5 class="card-title text-center game-card-showcase-title">${element.nombre}</h5>
        <p class="card-text d-none codi">${element.codigo}</p>
        <p class="card-text d-none catego">${element.category}</p>
        <p class="card-text d-none desc">${element.descripcion}</p>
        <p class="d-none publ">${element.publicado}</p>
        <div class="d-flex justify-content-center gap-2">
        <a href="./Paginas/error404.html"><button class="btn btn-primary" type="button">See More</button></a>
        </div>
      </div>
    </div>
        `
    });

}
loadPreloadedGames()

function loadUsers() {
    let data = localStorage.getItem('users')
    if (!data) {
        const users = [{
            id: 1,
            username: "admin",
            email: "admin17@gmail.com",
            password: "admin123",
            estado: "aprobado",
            securityQuestion: "What is your favorite color?",
            securityAnswer: "blue"
        }, {
            id: 2,
            username: "rodri8935",
            email: "rodrigo8935@gmail.com",
            password: "rodrigo123",
            estado: "pendiente",
            securityQuestion: `What is your dog's name?`,
            securityAnswer: `Oliver`
        }, {
            id: 3,
            username: "macacorrea715",
            email: "macacorrea715@gmail.com",
            password: "maca715unodos",
            estado: "pendiente",
            securityQuestion: `What is your dog's name?`,
            securityAnswer: `Mora`
        }, {
            id: 4,
            username: "liomessi",
            email: "liomessi@gmail.com",
            password: "quemirabobo",
            estado: "pendiente",
            securityQuestion: `What is your cat's name?`,
            securityAnswer: `Rosa`
        },
        {
            id: 5,
            username: "robert17",
            email: "robert17@hotmail.com",
            password: "robert96",
            estado: "aprobado",
            securityQuestion: `What is your cat's name?`,
            securityAnswer: `Maia`
        },
        {
            id: 6,
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
async function validate(event, type) {
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
                await Swal.fire({
                    icon: 'success',
                    title: 'Congratulations', text: 'You have successfully logged in', timer: 3000, showConfirmButton: false
                })
                redirect('user')
            }
            else if((enteredUser.username == isValidMail && enteredUser.password == isValidPass && enteredUser.estado == 'pendiente')){
                await Swal.fire({
                    icon: 'info',
                    title: 'Oops...', text: 'This user is not yet authorized by the admin', timer: 3000, showConfirmButton: false
                })
            }
            else if((enteredUser.username == isValidMail && enteredUser.password == isValidPass && enteredUser.estado == 'suspendido')){
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...', text: 'This user has been suspended', timer: 3000, showConfirmButton: false
                })
            }
            else {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...', html: 'The <b>username</b> or the <b>password</b> introduced is <b>wrong</b>', timer: 3000, showConfirmButton: false
                })
            }
        }
        else {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...', html: 'The <b>user</b> does not <b>exist</b>', timer: 3000, showConfirmButton: false
            })
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
        let users = JSON.parse(localStorage.getItem('users'))
        const foundUser = users.find(({ username }) => username == newUser)
        const foundEmail = users.find(({ email }) => email == newMail)
        if (!foundUser && !foundEmail) {
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
                Swal.fire('User creation was successful')
                Email.send({
                    Host: "smtp.elasticemail.com",
                    Username: "ana_sofia_400@hotmail.com",
                    Password: "BF9814EDF771B794050C9C30EF64741600CE",
                    To: 'ana_sofia_400@hotmail.com',
                    From: "ana_sofia_400@hotmail.com",
                    Subject: "New User",
                    Body: `<html>A new user has been registered with the username of: ${user.username}<br>
                      The email of: ${user.email}<br>
                      and an id of: ${user.id}
                      </html>`
                })
                newUser = document.getElementById("newUsername").value = ''
                newUserPass = document.getElementById("newPassword").value = ''
                newUserPassConfirm = document.getElementById("confirm").value = ''
                newMail = document.getElementById("userEmail").value = ''
                document.getElementById('closeModal').click()

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html:
                        'The <b>passwords</b> ' +
                        'that have been written ' +
                        'are <b>different</b>',
                    timer: 4500,
                    confirmButtonColor: '#269cb5'
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Username or email is already in use!',
                html:
                    'The <b>username or email</b> ' +
                    'that has been written ' +
                    'is <b>already in use</b>',
                timer: 4500,
                confirmButtonColor: '#269cb5'
            })
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

function logout() {
    localStorage.removeItem('loggedUser')
    location.reload()
}


function confirmLogout() {
    Swal.fire({
        title: 'Are you sure you want to log out??',
        icon: 'info',
        showDenyButton: true,
        confirmButtonText: 'Yes, i want to leave',
        confirmButtonColor: '#269cb5',
        denyButtonText: `Stay`,
        denyButtonColor: '#44b91f',
    }).then(async (result) => {
        if (result.isConfirmed) {
            await Swal.fire({ text: 'You have successfully logged out!', icon: 'success', confirmButtonColor: '#269cb5' })
            logout()
        } else if (result.isDenied) {
            Swal.fire({ text: 'You chose to stay signed in', icon: 'info', })
        }
    })
}
