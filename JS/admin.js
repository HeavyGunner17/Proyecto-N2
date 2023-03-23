function validateAdmin() {
  if (localStorage.getItem('loggedUser')) {
    const getloggeduser = localStorage.getItem('loggedUser')
    const loggeduser = JSON.parse(getloggeduser)
    if ((loggeduser.user) === "admin") {
    } else {
      window.location.href = '../index.html'
    }
  } else {
    window.location.href = '../index.html'
  }
}
validateAdmin()

function getPreloadedGames() {
  let previousLoadedGames = localStorage.getItem('juegos')
  if (!previousLoadedGames) {
    let preloadedGames = [{
      codigo: 35195,
      nombre: 'Civilization VI',
      category: 'Strategy',
      descripcion: 'Civilization VI is the new installment of the award-winning franchise Civilization',
      publicado: 'SI',
    }, {
      codigo: 70235,
      nombre: 'Warcraft III',
      category: 'Strategy',
      descripcion: 'Real-time strategy created by Blizzard Entertainment and is its third installment',
      publicado: 'SI',
    },
    {
      codigo: 195702,
      nombre: 'Crusader Kings II',
      category: 'Strategy',
      descripcion: 'Explore one of the decisive periods of history in a unique experience',
      publicado: 'SI',
    }, {
      codigo: 35702,
      nombre: 'Europa Universalis IV',
      category: 'Strategy',
      descripcion: 'Developed by Paradox Development Studio and published by Paradox Interactive',
      publicado: 'SI',
    }]
    let jsonGameList = JSON.stringify(preloadedGames)
    localStorage.setItem('juegos', jsonGameList)
  } else {
    return
  }

}

getPreloadedGames()

const table = document.getElementById("table-game");

let onEdit;

function validacion() {
  if (document.getElementById("recipient-code").value !== "" && document.getElementById("recipient-name").value !== "" &&
    document.getElementById("recipient-category").value !== "" && document.getElementById("recipient-category").value !== "" &&
    document.getElementById("message-text").value !== ""
  ) {
    return true
  }
  else {
    return false
  }
}

function validacionNew() {
  if (document.getElementById("inp-codigo").value !== "") {
    if (document.getElementById("inp-nombre").value !== "") {
      if (document.getElementById("inp-categ").value !== "") {
        if (document.getElementById("descri").value !== "") {
          return true;
        }
      }
    }
  }
}

function cargarJuegos() {

  let listaJuegos = JSON.parse(localStorage.getItem('juegos'))
  let filas = document.querySelectorAll(".fil");
  for (fila of filas) {
    fila.innerHTML = "";
  }

  for (juego of listaJuegos) {
    let cod = juego.codigo;
    let name = juego.nombre;
    let cat = juego.category;
    let descr = juego.descripcion;
    let pub = juego.publicado;
    let campos = [cod, name, cat, descr, pub];

    let row = document.createElement("tr");
    row.id = parseInt(juego.codigo);
    row.classList = "fil";
    let botonEliminar = document.createElement("button");
    botonEliminar.id = parseInt(juego.codigo) + 1;
    botonEliminar.onclick = () => {
      if (
        botonEliminar.id !== "" &&
        botonEliminar.id - 1 === parseInt(row.id)
      ) {
        row.innerHTML = "";
      }

      let gameToDelete = listaJuegos.findIndex((game) => game.codigo  !== row.id )
      // listaJuegos = listaJuegos.filter((obj) => obj.codigo !== row.id);
      listaJuegos.splice(gameToDelete, 1)

      localStorage.setItem("juegos", JSON.stringify(listaJuegos));
    };
    let botonEditar = document.createElement("div");
    botonEditar.innerHTML =
      '<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editarJuego" data-bs-whatever="@mdo"><i class="fa-solid fa-pen-to-square text-light fs-4"></i></button>';
    botonEditar.style = "width: 48px; display:flex; justify-content:center;";
    botonEditar.id = parseInt(juego.codigo) - 1;
    botonEditar.onclick = () => {
      onEdit = row.id;
      document.getElementById("inp-codigo").value = cod;
      document.getElementById("inp-nombre").value = name;
      document.getElementById("inp-categ").value = cat;
      document.getElementById("descri").value = descr;
    }
    let botonDestacar = document.createElement("button");
    botonDestacar.id = parseInt(juego.codigo) - 2;
    botonDestacar.onclick = () => {
      localStorage.setItem('color', botonDestacar.id);
      let botones = document.querySelectorAll('.botones');
      for (botonera of botones) {
        if (botonera.lastChild.firstChild.style.color == 'yellow') {
          botonera.lastChild.firstChild.style = "color: white";
        } else {
          botonDestacar.firstChild.style = "color:yellow !important"
        }
      }
      let datosDestacado = [name, cat, descr]
      localStorage.setItem('destacado', JSON.stringify(datosDestacado));
    }

    
    botonEliminar.innerHTML =
      '<i class="fa-solid fa-trash text-light fs-4"></i>';
    botonDestacar.innerHTML =
      '<i class="fa-regular fa-star text-light fs-4"></i>';
    botonEliminar.style.border = "none";
    botonEditar.firstChild.style.border = "none";
    botonDestacar.style.border = "none";
    table.appendChild(row);

    for (val of campos) {
      let tableData = document.createElement("td");
      tableData.textContent = val;
      tableData.style = "color:white; text-align:center";
      tableData.className = 'celda';
      row.appendChild(tableData);
    }
    let opciones = document.createElement("td");
    opciones.classList = "d-flex justify-content-center botones text-align:center";
    opciones.append(botonEliminar, botonEditar, botonDestacar);
    row.appendChild(opciones);
  }
}
cargarJuegos();

function agregarJuego() {
  let listaJuegos = JSON.parse(localStorage.getItem("juegos"));
  if (validacion()) {
    let juego = {
      codigo: document.getElementById("recipient-code").value,
      nombre: document.getElementById("recipient-name").value,
      category: document.getElementById("recipient-category").value,
      descripcion: document.getElementById("message-text").value,
      publicado: document.getElementById("published").value,
    };
    listaJuegos.push(juego);
    localStorage.setItem('juegos', JSON.stringify(listaJuegos));
    cargarJuegos();

    let conjuntoInput = document
      .getElementById("exampleModal")
      .querySelectorAll("input");
    for (input of conjuntoInput) {
      input.value = "";
    }
    let descrip = document.getElementById("message-text");
    descrip.value = "";
    // location.reload(true);
  } else {
    alert("Los campos son obligatorios");
  }
}

function editarJuego() {
  if (validacionNew()) {
    let codNew = document.getElementById("inp-codigo").value;
    let nombreNew = document.getElementById("inp-nombre").value;
    let categoryNew = document.getElementById("inp-categ").value;
    let descripcionNew = document.getElementById("descri").value;
    let publicadoNew = document.getElementById("publicado").value;

    let baseJuegos = JSON.parse(localStorage.getItem('juegos'));
    baseJuegos.map((j) => {
      if (j.codigo === onEdit) {
        j.codigo = codNew;
        j.nombre = nombreNew;
        j.category = categoryNew;
        j.descripcion = descripcionNew;
        j.publicado = publicadoNew;
      }
    })
    localStorage.setItem('juegos', JSON.stringify(baseJuegos));
    cargarJuegos();



    let inputsAEditar = document
      .getElementById("editarJuego")
      .querySelectorAll("input");
    for (input of inputsAEditar) {
      input.value = "";
    }

    let descrip = document.getElementById("descri");
    descrip.value = "";

    location.reload(true);
  } else {
    alert("Los campos son obligatorios");
  }

}

// function validColorStar() {
//  let colorStar = localStorage.getItem('color');
//   let star = document.getElementById('colorStar');
//   star.firstChild.style = "color: yellow !important";
//  };

//   validColorStar();