const table = document.getElementById('table-game');

function agregarJuego (){
    const datos = document.querySelectorAll('.dato');
    let row = document.createElement('tr');
    let botonEliminar = document.createElement('button');
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
    datos.innerHTML='';
    
}

