let users = JSON.parse(localStorage.getItem('users'))

function getSecurityQuestion(user) {
    return user.securityQuestion
}
function changeUserPassword() {
    event.preventDefault()

    let usernameInput = document.getElementById('userRecoverPassword').value
    let passwordInput = document.getElementById('password').value
    let securityQuestionInput = document.getElementById('security-question').value
    let users = JSON.parse(localStorage.getItem('users'))
    let foundUser = users.find(({ username }) => username == usernameInput)
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
        let indexValue = users.findIndex(index => index.username === recoveredUser.username)
        users[indexValue] = recoveredUser
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
function validateInput() {
    let usernameInput = document.getElementById('userRecoverPassword').value

    let users = JSON.parse(localStorage.getItem('users'))
    const foundUser = users.find(({ username }) => username == usernameInput)
    if (foundUser.username == usernameInput) {
        console.log('entrando')
        document.getElementById('passwordRecover').disabled = false;
        document.getElementById('security-question').disabled = false;
        document.getElementById('password-change').disabled = false;
        let userSecurityQuestion = getSecurityQuestion(foundUser)
        document.getElementById('security-question-label').innerHTML = `${userSecurityQuestion}`
    } else {
        Swal.fire({ icon: 'error', html: 'User is not found.', confirmButtonColor: '#269cb5' })
    }
}