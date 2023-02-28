const table = document.getElementById('table-game');
let listaJuegos = [];

function validacion (){
    if(document.getElementById('recipient-code').value!==''){
        if(document.getElementById('recipient-name').value!==''){
            if(document.getElementById('recipient-category').value!==''){
                if(document.getElementById('message-text').value!==''){
                    return true
                }
            }
        }
    }
}

function agregarJuego (){
    let filas = document.querySelectorAll('.fil');
    for(fila of filas){
        fila.innerHTML='';
    }    
if(validacion()){
    let juego = {
        codigo : document.getElementById('recipient-code').value,
        nombre : document.getElementById('recipient-name').value,
        category : document.getElementById('recipient-category').value,
        descripcion : document.getElementById('message-text').value,
        publicado : document.getElementById('published').value
    };
    listaJuegos.push(juego);
    localStorage.setItem('juegos',JSON.stringify(listaJuegos));

    let juegosGuardados = JSON.parse(localStorage.getItem('juegos'));
    for (juego of juegosGuardados){
        let cod = juego.codigo;
        let name = juego.nombre;
        let cat = juego.category;
        let descr = juego.descripcion;
        let pub = juego.publicado;
        let campos = [cod,name,cat,descr,pub];

        let row = document.createElement('tr');
        row.id = parseInt(juego.codigo);
        row.className ='fil';
        let botonEliminar = document.createElement('button');
        botonEliminar.id = parseInt(juego.codigo)+1;
        botonEliminar.onclick = ()=>{
            if(botonEliminar.id !== '' && ((botonEliminar.id)-1) === parseInt(row.id)){
                row.innerHTML ='';
            }
        }
        let botonEditar = document.createElement('div');
        botonEditar.innerHTML = '<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="fa-solid fa-pen-to-square text-light fs-4"></i></button>'
        botonEditar.style = "width: 48px"
        let botonDestacar = document.createElement('button');
        botonEliminar.innerHTML = '<i class="fa-solid fa-trash text-light fs-4"></i>'
        botonDestacar.innerHTML = '<i class="fa-regular fa-star text-light fs-4"></i>'
        botonEliminar.style.border = 'none';
        botonEditar.firstChild.style.border = 'none';
        botonDestacar.style.border = 'none';
        table.appendChild(row);

        for (val of campos){
            let tableData = document.createElement('td');
            tableData.textContent = val;
            tableData.style = 'color:white; text-align:center'
            row.appendChild(tableData);
            }
            let opciones = document.createElement('td');
            opciones.classList = 'd-flex justify-content-center'
            opciones.append(botonEliminar,botonEditar,botonDestacar);
            row.appendChild(opciones);
        }
        
    
    } else {
        alert('Los campos son obligatorios');
    }
        
} 



