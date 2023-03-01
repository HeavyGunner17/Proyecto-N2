/*
Los datos del registro van hacia el localStorage
Capturo los datos desde ahi y lo cargo en la tabla en estado "pendiente"
En editar abre modal para dar de alta el usuario, suspenderlo, o dejarlo pendiente
*/

/* ESTRUCTURA DE FILAS EN LA TABLA
<tr>
    <th class="table_text" scope="row">1</th>
    <td class="table_text">Rodrigo</td>
    <td class="table_text">rodrigo8935@gmail.com</td>
    <td class="table_text">Pendiente</td>
    <td class="table_text"><a href=""><i class="fa-solid fa-user-pen icon_userEdit"></i></a></td>
</tr>
*/

const table = document.getElementById('table_user');


function loadUsers () {
    
}