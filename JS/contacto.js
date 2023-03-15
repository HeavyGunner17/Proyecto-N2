const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contacto = document.getElementById("comentario");

function enviarComment(){
    alert('Your comment was sent');
    location.reload();
}

nombre.addEventListener("input", function (event){
    let nombreCompleto= event.target.value;
    
    if(nombreCompleto.length > 20){
        alert("This name is invalid");
        nombre.style= "background-color: tomato";
    } else if (nombreCompleto.length == 0){
        nombre.style = "background-color: white";
    }
    else if(nombreCompleto.length < 10){
        nombre.style= "background-color: tomato";
    } else {
        nombre.style= "background-color: lightgreen";
    }
    
});

email.addEventListener("input", function (event){
    if(nombre.value != '' && nombre.style.backgroundColor=="lightgreen"){
        let mail = event.target.value;
        if(email.value.includes("@") && email.value.includes(".com") && mail.length <30 ){
            email.style= "background-color: lightgreen";
        } else if (mail.length == 0){
            email.style = "background-color: white";
        }
        else{
            email.style= "background-color: tomato";
        } ;

    } else{
        alert("Complete with a valid name");
        email.value='';
    }
    ;

});

contacto.addEventListener("input", function (event){
    if(email.value == '' || nombre.value =='' || email.style.backgroundColor == "tomato" || nombre.style.backgroundColor == "tomato" ){
        alert("Complete the other slot for can continue");
            contacto.value= '';
    }
    
    }
);
































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
        if (!email.value.includes("@")) {
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