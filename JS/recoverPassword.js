let users = JSON.parse(localStorage.getItem('users'))


//funcion que recibe un objeto y retorna la securityQuestion de este user
function getSecurityQuestion(user) {
    return user.securityQuestion
}


//funcion que se encarga de cambiar la contraseña del usuario, se ejecuta al hacer submit al formulario
function changeUserPassword() {
    event.preventDefault()

//traemos los valores de lo que ingreso el usuario en el formulario
    let usernameInput = document.getElementById('userRecoverPassword').value
    let passwordInput = document.getElementById('password').value
    let securityQuestionInput = document.getElementById('security-question').value

//traemos la lista de usuarios
    let users = JSON.parse(localStorage.getItem('users'))
    //traemos el objeto del usuario ingresado en el input
    let foundUser = users.find(({ username }) => username == usernameInput)

    //comprobamos si la respuesta de seguridad es correcta
    if (foundUser.securityAnswer !== securityQuestionInput) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            html:
                'The <b>security answer</b> ' +
                'is wrong',
            showConfirmButton: false,
            timer: 1500
        })

        //si es correcta la respuesta, creamos el nuevo objeto con la nueva contraseña ingresada manteniendo los datos previos
    }else{
        let recoveredUser = {
            email: foundUser.email,
            estado: foundUser.estado,
            id: foundUser.id,
            password: passwordInput,
            securityAnswer: foundUser.securityAnswer,
            securityQuestion: foundUser.securityQuestion,
            username: foundUser.username
        }

        //buscamos el index del objeto con el usuario que coincida con el usuario que queremos editar
        let indexValue = users.findIndex(index => index.username === recoveredUser.username)
        //reemplazamos el objeto dentro del array y lo enviamos de vuelta al localstorage
        users[indexValue] = recoveredUser

        //lo enviamos al localstorage
        let newUserData = JSON.stringify(users)
        localStorage.setItem('users', newUserData)
        Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            html:
                'The <b>passwords</b> ' +
                'has been successfully changed',
            showConfirmButton: false,
            timer: 1500
        })
    }
}



//funcion valida que el usuario ingresado exista en nuestra lista de usuarios
function validateInput() {
    let usernameInput = document.getElementById('userRecoverPassword').value
    let users = JSON.parse(localStorage.getItem('users'))
    const foundUser = users.find(({ username }) => username == usernameInput)

    //si el usuario que ingresamos existe, habilitamos el input de escribir contraseña y pregunta de seguridad
    if (foundUser.username == usernameInput) {
        document.getElementById('passwordRecover').disabled = false;
        document.getElementById('security-question').disabled = false;
        document.getElementById('password-change').disabled = false;
        //guardamos en una variable la pregunta de seguridad de un usuario llamando a la funcion getSecurityQuestion
        let userSecurityQuestion = getSecurityQuestion(foundUser)

        //ingresamos en el HTML del formulario la pregunta de seguridad del usuario que traemos
        document.getElementById('security-question-label').innerHTML = `${userSecurityQuestion}`
    } else {

        //devolvemos un error si no se encontró el usuario que se ingreso en el formulario
        Swal.fire({ icon: 'error', html: 'User is not found.', confirmButtonColor: '#269cb5' })
    }
}