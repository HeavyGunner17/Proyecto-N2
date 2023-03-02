
function mostrar(){
    const nombre=document.getElementById("nombre");
    const name=nombre.value;

    console.log(name);
};

mostrar();
const enviar=document.getElementById("enviar");
enviar.onclick=mostrar