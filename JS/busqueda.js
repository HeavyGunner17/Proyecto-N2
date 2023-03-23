let card = document.getElementById('card-template');

const query = document.getElementById('search');

const btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener("click", async function (e) {
  try {
    const isClick = query.value.toLowerCase();


    const api = `https://api.rawg.io/api/games?key=85458154fdcb4c3abf3290a579a65e18&search=${isClick} `
    const res = await fetch(api);
    const json = await res.json();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    if (json.results.length === 0) {

      card.innerHTML = `<h2 style='color:#fff'>No existen resultados de juegos para la busqueda: <mark>${query}</mark></h2>`
    } else {
      card.innerHTML = "";
      json.results.forEach(el => {
        card.innerHTML +=
          `
          <div class="col text-light game-card p-1">
          <div class="card text-white bg-dark">
          <img src="${el.background_image}" alt="${el.name}" class="h-50 card-img-top" />
          </div>
            <div class="card-body overlay">
              <h5 class="card-title text-center game-card-showcase-title">${el.name}</h5>     
              <div class="d-grid gap-2 mb-2">
                <a  href="../Paginas/detalles.html" class="btn btn-primary" onclick="capturar(${el.id})">
                See More Details
                </a>
                <a class="btn btn-success" href="./Paginas/error404.html"><i class="fa-sharp fa-solid fa-cart-shopping"> Shop Now!</i></a>
                
                
            </div>             
            </div>


                `;
      }
      );
    }




  } catch (err) {
    let mensaje = err.statusText || "ocurrio un Error";
    card.innerHTML = `<p>Error ${err.status}: ${mensaje}</p>`
  }



})





query.addEventListener("keypress", async e => {
  if (e.target.matches("#search")) {
    if (e.key === "Enter") {
      try {
        let query = e.target.value.toLowerCase();
        const api = `https://api.rawg.io/api/games?key=85458154fdcb4c3abf3290a579a65e18&search=${query} `
        const res = await fetch(api);
        const json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        if (json.results.length === 0) {

          card.innerHTML = `<h2 style='color:#fff'>No existen resultados de juegos para la busqueda: <mark>${query}</mark></h2>`
        } else {
          card.innerHTML = "";
          json.results.forEach(el => {


            card.innerHTML +=
              `
              <div class="col text-light game-card p-1">
              <div class="card text-white bg-dark">
              <img src="${el.background_image}" alt="${el.name}" class="h-50 card-img-top" />
              </div>
                <div class="card-body overlay">
                  <h5 class="card-title text-center game-card-showcase-title">${el.name}</h5>     
                  <div class="d-grid gap-2 mb-2">
                    <a  href="../Paginas/detalles.html" class="btn btn-primary" onclick="capturar(${el.id})">
                    See More Details
                    </a>
                    <a class="btn btn-success" href="./Paginas/error404.html"><i class="fa-sharp fa-solid fa-cart-shopping"> Shop Now!</i></a>
                    
                    
                </div>             
                </div>
    
    
              `;
          }
          );




        }
      } catch (err) {
        let mensaje = err.statusText || "ocurrio un Error";
        card.innerHTML = `< p > Error ${ err.status }: ${ mensaje }</p > `
      }
    }
  }
})


function generateFooter() {
  let footer = document.getElementById('footer')
  footer.innerHTML = `
              < footer class="pie-pagina container-fluid pt-3" >
  <div class="row grupo-1">
      <div class="col d-flex justify-content-center align-items-center">
          <div class="box">
              <figure>
                  <a href="#">
                      <img src="../IMG/monkeyGames_logo_vertical.png" alt="logo MonkeyGames">
                  </a>
              </figure>
          </div>
      </div>
      <div class="col d-flex justify-content-center align-items-center text-center">
          <div class="box">
              <h2 class='footer-title'>MonkeyGames</h2>
              <p>We are on a mission to help everyone discover the joy of video games.</p>
              <p>The future of video games goes beyond entertainment, and it's a privilege to help shape it. shape
                  it!
                  We are building a safe, affordable and sustainable marketplace for all gamers today and
                  tomorrow.
                  today and tomorrow.</p>
          </div>
      </div>
      <div class="col d-flex justify-content-center align-items-center">
          <div class="box">
              <h2 class='footer-title'>Follow us</h2>
              <div class="red-social text-center">
                  <a href="/Paginas/error404.html" class="fa fa-facebook socials"></a>
                  <a href="/Paginas/error404.html" class="fa fa-instagram socials"></a>
                  <a href="/Paginas/error404.html" class="fa fa-twitter socials"></a>
                  <a href="/Paginas/error404.html" class="fa fa-youtube socials"></a>
              </div>
          </div>
      </div>
  </div>
  
  <div class="d-flex justify-content-center">
      <div class="d-flex justify-content-center">
          <small> &copy;2023 <b>MonkeyGames</b> - All rights reserved -</small>
      </div>
  </div>
            `
}

function capturar(id) {

  let valor = id;
  let nuevo = valor.toString();

  //localStorage.setItem("detail", JSON.stringify(nuevo))
  localStorage.setItem('detail', valor)
}


generateFooter()