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
              <!-- Modal -->
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content" id="modal-detail">
                  </div>
                </div>
              </div>



              <div class="col-3  text-light game-card p-1">
              <div class="card text-white d-block">
                <img src="${el.background_image}" class="card-img-top h-50" alt="${el.name}">
              </div>
              <div class="card-body overlay">
                <h5 class="card-title text-center game-card-showcase-title">${el.name}</h5
                <div class="d-flex justify-content-center gap-2">
                <a href="../Paginas/error404.html"><button class="btn btn-primary" type="button">See More</button></a>
                </div>
              </div>
            </div>
                `;
      }
      );
    }



              
    //           <div class="col" >
    //             <div class="card h-100 border-primary text-white bg-dark">
    //             <img src="${el.background_image}" alt="${el.name}" class="h-50"/>
    //               <div class="card-body">
    //                 <h5 class="card-title text-center">${el.name}</h5>              
                    
    //               </div>
    //               <div class="d-grid gap-2">
    //               <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="detalleid" onclick="detalle(${el.id})">
    //               See More 
    //               </button>
    //               </div>
    //             </div>
    //           </div>
    //           `;
    //   }
    //   );

    // }

  } catch (err) {
    let mensaje = err.statusText || "ocurrio un Error";
    card.innerHTML = `<p>Error ${err.status}: ${mensaje}</p>`
  }



})

async function detalle(id) {
  let valor = id;
  const api = `https://api.rawg.io/api/games/${id}?key=85458154fdcb4c3abf3290a579a65e18`
  const res = await fetch(api);
  const json = await res.json();
  const modal = document.getElementById('modal-detail')
  //window.location.href="./detalle.html"
  modal.innerHTML = "";
  modal.innerHTML += `
        
        <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">${json.name}</h5>

        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="${json.background_image}" alt="${json.name}"  class="w-50"/>
      <p class="card-text">Released: ${json.released}</p>
      <p class="card-text">Rating: ${json.rating}</p>
      <p class="card-text">Description: ${json.description}</p>
      
      <p>Website: <a href="${json.website}">${json.website}</a></p>
      
      
      </div>
     
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        
      </div>
        
        
        `
}




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
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content" id="modal-detail">
                 
                </div>
              </div>
            </div>


            <div class="col-3  text-light game-card p-1">
            <div class="card text-white d-block">
              <img src="${el.background_image}" class="card-img-top h-50" alt=""${el.name}"">
            </div>
            <div class="card-body overlay">
              <h5 class="card-title text-center game-card-showcase-title">${el.name}</h5>
              <p class="card-text d-none codi">id${el.id}</p>
              <p class="card-text d-none desc">Released: ${el.released}</p>
              <p class="d-none publ">Rating: ${el.rating}</p>
              <div class="d-flex justify-content-center gap-2">
              <a href="../Paginas/error404.html"><button class="btn btn-primary" type="button">See More</button></a>
              </div>
            </div>
          </div>
              `;
          }
          );






                // <div class="col" >
                //   <div class="card h-100 border-primary text-white bg-dark">
                //   <img src="${el.background_image}" alt="${el.name}" class="h-50"/>
                //     <div class="card-body">
                //       <h5 class="card-title text-center">${el.name}</h5>              
                //       <p class="card-text">id:${el.id}</p>
                //       <p class="card-text">Released: ${el.released}</p>
                //       <p class="card-text">Rating: ${el.rating}</p>
                //     </div>
                //     <div class="d-grid gap-2">
                //     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="detalleid" onclick="detalle(${el.id})">
                //     See More 
                //     </button>
                //     </div>
                //   </div>
                // </div>
      

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

generateFooter()