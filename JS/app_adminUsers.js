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
let idEdit;

let userRegistred = JSON.parse(localStorage.getItem("user"));

function loadUsers(usersLocal) {
  for (user of usersLocal) {
    let row_user = document.createElement("tr");
    table.appendChild(row_user);

    let id = user.id;
    let name = user.name;
    let email = user.email;
    let status = user.status;

    let userData = [id, name, email, status];

    for (dato of userData) {
      let campo = document.createElement("td");
      campo.className = "table_text";
      campo.textContent = dato;

      if (!isNaN(dato)) {
        campo.id = "id_user";
      }

      row_user.appendChild(campo);
    }

    let options = document.createElement("td");
    options.className = "table_text";
    options.innerHTML += `<button class="bg-transparent border-0" onclick="openModal_getId(${id})" data-bs-toggle="modal" data-bs-target="#editUserModal">
        <i class="fa-solid fa-user-pen icon_userEdit">
        </i>
      </button>`;

    row_user.appendChild(options);
  }
}

loadUsers(userRegistred);

function openModal_getId(id) {
  idEdit = usuarios[id - 1];
}

function statusChange() {
  const select_status = document.getElementById("select_status");
  const newStatus = select_status.options[select_status.selectedIndex].text;

  const close_modal = document.getElementById("close_modal");

  let newUsersRegistred = JSON.parse(localStorage.getItem("user"));

  newUsersRegistred.map((us) => {
    if (us.id === idEdit.id) {
      us.status = newStatus;
    }
  });

  localStorage.setItem("user", JSON.stringify(newUsersRegistred));

  table.innerHTML = "";

  loadUsers(newUsersRegistred);

  select_status.selectedIndex = 0;

  close_modal.click();
}
