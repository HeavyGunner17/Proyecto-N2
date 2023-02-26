const table = document.getElementById('table-game');

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
    const datos = document.querySelectorAll('.dato');
    if(validacion()){
        let row = document.createElement('tr');
        row.id = document.getElementById('recipient-code').value;
        let botonEliminar = document.createElement('button');
        botonEliminar.id = document.getElementById('recipient-code').value;
        botonEliminar.onclick = ()=>{
            if(botonEliminar.id!== ''&& botonEliminar.id === row.id){
                row.innerHTML ='';
            }
        }
        let botonEditar = document.createElement('button');
        let botonDestacar = document.createElement('button');
        botonEliminar.innerHTML = '<i class="fa-solid fa-trash text-light fs-4"></i>'
        botonEditar.innerHTML = '<i class="fa-solid fa-pen-to-square text-light fs-4"></i>'
        botonDestacar.innerHTML = '<i class="fa-regular fa-star text-light fs-4"></i>'
        botonEliminar.style.border = 'none'
        botonEditar.style.border = 'none'
        botonDestacar.style.border = 'none'
        table.appendChild(row);
        for (dato of datos){
            let campo = dato.value;
            let tableData = document.createElement('td');
            tableData.textContent = campo;
            tableData.style = 'color:white; text-align:center'
            row.appendChild(tableData);
        }
        let opciones = document.createElement('td');
        opciones.style.textAlign = 'center';
        opciones.append(botonEliminar,botonEditar,botonDestacar);
        row.appendChild(opciones);
        for(dato of datos){
            dato.value = '';
        }
    } else {
        alert('Los campos son obligatorios');
    }
        
} 



