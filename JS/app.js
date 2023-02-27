//key para nuestra api funcione con las peticiones
//const key= "85458154fdcb4c3abf3290a579a65e18";

const URL= "https://api.rawg.io/api/games?key=85458154fdcb4c3abf3290a579a65e18";

let card = document.getElementById('card-template');

async function getGames(url){
    const res = await fetch(url);
    const data= await res.json();
    //console.log("Estoy consumiendo API");
    console.log(data.results);
    displayGames(data.results);

}


function displayGames(games){
    games.forEach(game=> {
        const{id,name, background_image, released, rating}=game;
        card.innerHTML+=
        `
        <div class="col" >
          <div class="card h-100 border-primary text-white bg-dark">
          <img src="${background_image}" alt="${name}" />
            <div class="card-body">
              <h5 class="card-title text-center">${name}</h5>              
              <p class="card-text">id:${id}</p>
              <p class="card-text">Released: ${released}</p>
              <p class="card-text">Rating: ${rating}</p>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button">Ver Mas</button>
            </div>
          </div>
        </div>
        `;
        
    });
}




getGames(URL);