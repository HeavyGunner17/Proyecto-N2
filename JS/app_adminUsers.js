const table = document.getElementById("table_user");
let idEdit;
const logout_li = document.getElementById('logout_admin');

let userRegistred = JSON.parse(localStorage.getItem("users"));

function loadUsers(usersLocal) {
  for (user of usersLocal) {
    let row_user = document.createElement("tr");
    table.appendChild(row_user);

    let id = user.id;
    let username = user.username;
    let email = user.email;
    let status = user.estado;

    let userData = [id, username, email, status];

    for (dato of userData) {
      let campo = document.createElement("td");
      campo.className = "table_text";
      campo.textContent = dato;

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
  idEdit = userRegistred[id];
}

function statusChange() {
  const select_status = document.getElementById("select_status");
  const newStatus = select_status.options[select_status.selectedIndex].text;

  const close_modal = document.getElementById("close_modal");

  let newUsersRegistred = JSON.parse(localStorage.getItem("users"));

  newUsersRegistred.map((us) => {
    if (us.id === idEdit.id) {
      us.estado = newStatus;
    }
  });

  localStorage.setItem("users", JSON.stringify(newUsersRegistred));

  table.innerHTML = "";

  loadUsers(newUsersRegistred);

  select_status.selectedIndex = 0;

  close_modal.click();
}

