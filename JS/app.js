

const URL = "https://api.rawg.io/api/games?key=85458154fdcb4c3abf3290a579a65e18";

let card = document.getElementById('card-template');

async function getGames(url) {
  const res = await fetch(url);
  const data = await res.json();

  displayGames(data.results);

}

function displayGames(games) {
  let coso = [];
  games.forEach(game => {
    const { id, name, background_image, released, rating, genres } = game;
    card.innerHTML +=
      `
            <div class="col text-light game-card p-1">
              <div class="card text-white bg-dark">
              <img src="${background_image}" alt="${name}" class="h-50 card-img-top" />
              </div>
                <div class="card-body overlay">
                  <h5 class="card-title text-center game-card-showcase-title">${name}</h5>     
                  <div class="d-grid gap-2 mb-2">
                    <a  href="./Paginas/detalles.html" class="btn btn-primary" onclick="capturar(${id})">
                    See More Details
                    </a>
                    <a class="btn btn-success" href="./Paginas/error404.html"><i class="fa-sharp fa-solid fa-cart-shopping"> Shop Now!</i></a>
                </div>             
                </div>
            `;

  });
}
let valor = [];
function capturar(id) {

  let valor = id;
  let nuevo = valor.toString();

  //localStorage.setItem("detail", JSON.stringify(nuevo))
  localStorage.setItem('detail', valor)
}



getGames(URL);

