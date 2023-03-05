/*
Los datos del registro van hacia el localStorage
Capturo los datos desde ahi y lo cargo en la tabla en estado "pendiente"
En editar abre modal para dar de alta el usuario, suspenderlo, o dejarlo pendiente
*/

/* ESTRUCTURA DE FILAS EN LA TABLA
<tr>
    <td class="table_text" scope="row">1</td>
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


let usuarios = [
  {
    id: 1,
    name: "Rodrigo Brizuela",
    email: "rodrigo8935@gmail.com",
    status: "Pendiente",
  },
  {
    id: 2,
    name: "Macarena Correa",
    email: "macacorrea715@gmail.com",
    status: "Pendiente",
  },
  {
    id: 3,
    name: "Lionel Messi",
    email: "liomessi@gmail.com",
    status: "Pendiente",
  },
];
localStorage.setItem("user", JSON.stringify(usuarios));

const table = document.getElementById("table_user");

let userRegistred = JSON.parse(localStorage.getItem("user"));

function loadUsers() {

  for (user of userRegistred) {
    let row_user = document.createElement("tr");
    table.appendChild(row);

    let id = user.id;
    let name = user.name;
    let email = user.email;
    let status = user.status;

    let userData = [id, name, email, status];

    for (dato of userData) {
      let campo = document.createElement("td");
      campo.className = "table_text";

      campo.textContent = dato;

      row_user.appendChild(campo);
    }

    let options = document.createElement("td");
    options.className = "table_text";
    options.innerHTML += `<button class="bg-transparent border-0" onclick="open_modal ()" data-bs-toggle="modal" data-bs-target="#editUserModal">
        <i class="fa-solid fa-user-pen icon_userEdit">
        </i>
      </button>`;

      row_user.appendChild(options);
  }
}

function open_modal () {
  
}

function statusChange() {
  const select_status = document.getElementById("select_status");

  const newStatus = select_status.options[select_status.selectedIndex].text;

  

  
}

loadUsers();
