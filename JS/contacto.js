function sendEmail(event) {
    event.preventDefault()

    const username = document.getElementById("name");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("comentario");

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ana_sofia_400@hotmail.com",
        Password: "BF9814EDF771B794050C9C30EF64741600CE",
        To: 'ana_sofia_400@hotmail.com',
        From: "ana_sofia_400@hotmail.com",
        Subject: "Comment by user",
        Body: `<html>The user: ${username.value}, email: ${email.value} has sent a message: <br> ${mensaje.value}<br>
</html>`
    })
    Swal.fire({ text: 'Comment sent to the administrator', icon: 'success', })
}