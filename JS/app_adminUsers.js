/*
Los datos del registro van hacia el localStorage
Capturo los datos desde ahi y lo cargo en la tabla en estado "pendiente"
En editar abre modal para dar de alta el usuario, suspenderlo, o dejarlo pendiente
*/

/* ESTRUCTURA DE FILAS EN LA TABLA
<tr>
    <th class="table_text" scope="row">1</th>
    <td class="table_text">${userRegistred[0]}</td>
    <td class="table_text">${userRegistred[1]}</td>
    <td class="table_text">${userRegistred[2]}</td>
    <td class="table_text">
      <button class="bg-transparent border-0" data-bs-toggle="modal" data-bs-target="#editUserModal">
        <i class="fa-solid fa-user-pen icon_userEdit">
        </i>
      </button>
    </td>
</tr>
*/

const table = document.getElementById('table_user');

let usuarios = ["Rodrigo Brizuela, rodrigo8935@gmail.com, Pendiente", "Macarena Correa, macacorrea715@gmail.com, Pendiente", "Roberto Juarez, rojuarez@gmail.com, Pendiente"]

localStorage.setItem('user', usuarios);


function loadUsers () {
    let userRegistred = localStorage.getItem('user').split(',');
    

}

function statusChange () {
    const newStatus = document.getElementById('statusUser').value;



}

loadUsers();