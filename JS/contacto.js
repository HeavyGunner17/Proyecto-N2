const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contacto = document.getElementById("comentario");

function enviarComment() {
    let regexp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if (nombre.value != "" && nombre.value.length < 20 && nombre.value.length > 10) {
        if (email.value != "" && regexp.test(email.value)) {
            if (contacto.value != "" && contacto.value.length < 100 && contacto.value.length > 10) {
                alert('Your comment was sent');
                location.reload(); email.send({
                    Host: "smtp.elasticemail.com",
                    To: 'ana_sofia_400@hotmail.com',
                    From: "ana_sofia_400@hotmail.com",
                    Subject: "Comment by user",
                    Body: `<html>An user has commented : ${nombre.value}<br>
      The comment is: ${comentario.value}<br>
      </html>`
                })
            } else { alert("please add a valid comment") };
        } else { alert("please add a valid email") };
    } else {
        alert("please add a valid name");
    };

}






































//const datos = [nombre,email,contacto];

//function validacion (){
//if(nombre.value !== "" && email.value !== ""|| mail() && contacto.value !== ""){
//  alert("mensaje enviado");
//  //funcion de envio de mail
// for(dato of datos){
//    dato.value="";
// }

//}else{
//   alert("Algun campo incompleto");

//}

//}



function mail() {
    if (email.value.includes("@")) {
        alert("email incorrecto");
        email.focus();
        return true;
    }
}







// for(dato of datos) {
//     if(dato.value !== ""){
//         alert("este campo el obligatorio");
//         dato.focus();
//     }else{
//         alert("mensaje enviado");
//     }
// }