let users = JSON.parse(localStorage.getItem('users'))

function getSecurityQuestion(user) {
    return user.securityQuestion
}
function changeUserPassword() {
    event.preventDefault()
    let usernameInput = document.getElementById('username').value
    let passwordInput = document.getElementById('password').value
    let users = JSON.parse(localStorage.getItem('users'))
    let foundUser = users.find(({ username }) => username == usernameInput)
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
function validateInput() {
    let usernameInput = document.getElementById('username').value
    let questionInput = document.getElementById('securityQuestion').value
    let passwordInput = document.getElementById('password').value
    let users = JSON.parse(localStorage.getItem('users'))
    const foundUser = users.find(({ username }) => username == usernameInput)
    if (foundUser.username == usernameInput) {
        document.getElementById('password').disabled = false
        document.getElementById('password-change').disabled = false
        document.getElementById('securityQuestion').disabled = false
        let userSecurityQuestion = getSecurityQuestion(foundUser)
        document.getElementById('security-question-label').innerHTML = `${userSecurityQuestion}`
    } else {
        Swal.fire({ icon: 'success', html: 'You have changed your password.', confirmButtonColor: '#269cb5' })
    }
}