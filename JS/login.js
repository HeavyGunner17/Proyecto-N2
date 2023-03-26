//funcion que se ejecuta apenas entramos en el sitio y valida si hay un usuario logueado
function validatePreviousLogin() {
    const getloggeduser = localStorage.getItem('loggedUser')
    const loggeduser = JSON.parse(getloggeduser)
    if (getloggeduser) {

        //si el usuario es admin, genera el html en el navbar con las opciones de admin
        if (loggeduser.user === "admin") {
            document.getElementById('navbar-login').innerHTML = `
          <div class="dropdown">
          <a class="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown">${loggeduser.user}</a>  
          <ul class="dropdown-menu">
          <li class="dropdown-user"><a class="dropdown-item" href="../Paginas/error404.html">View Profile</a></li>
          <li class="dropdown-user"><a class="dropdown-item" href="../Paginas/adminUsers.html">User Admin.</a></li>
          <li class="dropdown-user"><a class="dropdown-item" href="../Paginas/administración.html">Games Admin.</a></li>
          <li class="dropdown-user"><a class="dropdown-item" href="#" onclick="confirmLogout()">Logout</a></li>
          </ul>
          </div>`
        } 
        //si el usuario es user, genera el html en el navbar con las opciones de user
        else {
            
            document.getElementById('navbar-login').innerHTML = `
          <div class="dropdown">
          <a class="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown">${loggeduser.user}</a>  
          <ul class="dropdown-menu">
          <li class="dropdown-user"><a class="dropdown-item" href="../Paginas/error404.html">View Profile</a></li>
          <li class="dropdown-user"><a class="dropdown-item" href="#" onclick="confirmLogout()">Logout</a></li>
          </ul>
          </div>`
        }
    } 
    //si no existe un usuario logueado en el localstorage, entonces generamos el html de login en el navbar
    else {
        document.getElementById('navbar-login').innerHTML = `
          <a class="nav-link text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>`
    }
}
validatePreviousLogin()

//funcion que carga los usuarios al localstorage si es que previamente no habia datos de estos usuarios en el localstorage
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

//funcion que guarda todas las id's de los usuarios en un array y luego llama a otro metodo que me devuelva una id diferente a todas las existentes
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


//funcion que utilizamos para redireccionar en caso de login admin o login user
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



//Funcion que recibe que tipo de formulario está enviando el usuario
async function validate(event, type) {

    //vemos si la funcion fue llamada por el formulario de login
    if (type == "login") {


        //traemos los valores de lo que ingreso el usuario
        const isValidMail = document.getElementById("username").value
        const isValidPass = document.getElementById("password").value

        //traemos la lista de usuarios del localstorage
        let userListJSON = localStorage.getItem('users')
        let userList = JSON.parse(userListJSON)
        event.preventDefault()

        //vemos si lo ingresado por el usuario es admin para redireccionarlo a la seccion de administrador y guardar en el localstorage el usuario logueado
        if (isValidMail == "admin" && isValidPass == "admin123") {
            const loggedIn = {
                user: isValidMail,
            }
            const loggedInUser = JSON.stringify(loggedIn)
            localStorage.setItem('loggedUser', loggedInUser)
            redirect("admin")
        }

        //vemos si el usuario ingresado existe en la lista de usuarios
        else if (userList.find(({ username }) => username === isValidMail)) {


            //guardamos el objeto del usuario existente con el que coincide el nombre ingresado
            const enteredUser = userList.find(({ username }) => username === isValidMail)

            //validamos que no solo el usuario ingresado coincide con el de la lista, sino que tambien validamos que la contraseña sea correcta y el usuario este aprobado 
            // por el administrador, si el usuario está validado, guardamos el login en el localstorage y redireccionamos a la seccion de usuario
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
            } else {
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

    //vemos si la funcion fue llamada por el formulario de crear cuenta
    else if (type == "create") {
        event.preventDefault()
        // guardamos todos los valores ingresados en el formulario de crear cuenta
        let newUser = document.getElementById("newUsername").value
        let newUserPass = document.getElementById("newPassword").value
        let newUserPassConfirm = document.getElementById("confirm").value
        let newMail = document.getElementById("userEmail").value
        let newSecurityQuestion = document.getElementById("securityQuestion").value
        let newSecurityAnswer = document.getElementById("securityAnswer").value

        //traemos la lista de usuarios
        let users = JSON.parse(localStorage.getItem('users'))

        //buscamos si el usuario o el email ingresado ya existen en nuestra lista de usuarios
        const foundUser = users.find(({ username }) => username == newUser)
        const foundEmail = users.find(({ email }) => email == newMail)

        //si el usuario y el email ingresados no existen en nuestra lista, registramos el usuario y lo cargamos al localstorage
        if (!foundUser && !foundEmail) {
            if (newUserPass == newUserPassConfirm) {
                const user =
                {
                    username: newUser,
                    email: newMail,
                    password: newUserPass,
                    securityQuestion: newSecurityQuestion,
                    securityAnswer: newSecurityAnswer,
                    estado: "pendiente",
                    id: getNewId()
                }
                let userListJSON = localStorage.getItem('users')
                let userList = JSON.parse(userListJSON)
                userList.push(user)
                let newUserList = JSON.stringify(userList)
                localStorage.setItem('users', newUserList)
                Swal.fire('User creation was successful')

                // enviamos el mail informando al admin de la creacion de un nuevo usuario
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

                //limpiamos los valores de los inputs y cerramos el modal
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


//saca del localstorage el usuario logueado y recarga la pagina
function logout() {
    localStorage.removeItem('loggedUser')
    location.reload()
}


//funcion que confirma si el usuario desea salir de su cuenta, si confirma que desea salir, se ejecuta la funcion logout de arriba
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
