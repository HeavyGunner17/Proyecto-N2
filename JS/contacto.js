const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contacto = document.getElementById("comentario");



function registro (){
    if(nombre.value === ""){
        console.log("vacio");
    } else {
        console.log("no vacio")
    }
}

nombre.addEventListener("input", function (event){
    console.log(event.target.value);
});

email.addEventListener("input", function (event){
    let email = (event.target.value);
});

contacto.addEventListener("input", function (event){
    console.log(event.target.value);
});
































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