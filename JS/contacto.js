const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contacto = document.getElementById("comentario");

const datos = [nombre,email,contacto];

function validacion (){
if(nombre.value !== "" && email.value !== ""|| mail() && contacto.value !== ""){
    alert("mensaje enviado");
    //funcion de envio de mail
    for(dato of datos){
        dato.value="";
    }

}else{
    alert("Algun campo incompleto");

}

}



function mail (){
    if(!email.value.includes("@")){
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