//key para nuestra api funcione con las peticiones
//const key= "85458154fdcb4c3abf3290a579a65e18";

const URL= "https://api.rawg.io/api/games?key=85458154fdcb4c3abf3290a579a65e18";

let card = document.getElementById('card-template');
//const juegos=[];


async function getGames(url){
    const res = await fetch(url);
    const data= await res.json();
    //console.log("Estoy consumiendo API");
    //console.log(data.results);
    //juegos.push(...data.results);


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
          <img src="${background_image}" alt="${name}"  class="h-50"/>
            <div class="card-body">
              <h5 class="card-title text-center">${name}</h5>              
              <p class="card-text">id:${id}</p>
              <p class="card-text">Released: ${released}</p>
              <p class="card-text">Rating: ${rating}</p>
              
            </div>
            <div class="d-grid gap-2">
            <button class="btn btn-outline-success"  type="button">Add to Fav</button>
                <button class="btn btn-primary" type="button">See More</button>
            </div>
          </div>
        </div>
        `;
        
    });
}


getGames(URL)
.then(
  (r)=>{
    console.log("Se esta Ejecutando la promesa");
  }
)
.catch((e)=>{console.warn(e);});

const  getGamesByName = async (name) => {
  try {
      let result = await fetch(`https://api.rawg.io/api/games?key=85458154fdcb4c3abf3290a579a65e18&search=${name}`);
      
      result = await result.json();
      
      console.log(result);

  } catch (error) {
      console.error(err);
  };
};

//getGamesByName("counter"); 

/*
const query = document.getElementById('search');
query.addEventListener("keypress",async e=>{
  if(e.target.matches("#search")){
    //console.log(e.key);
    if(e.key ==="Enter"){
      try {
        let query=e.target.value.toLowerCase();
     const   api= `https://api.rawg.io/api/games?key=85458154fdcb4c3abf3290a579a65e18&search=${query} `
       const res = await fetch(api);
        const json = await res.json();

        console.log("imprimo RES",res);
        console.log("imprimo JSON",json);
        if(!res.ok)throw{status:res.status, statusText:res.statusText};

        if(json.results.length ===0){
          
          card.innerHTML=`<h2 style='color:#fff'>No existen resultados de juegos para la busqueda: <mark>${query}</mark></h2>`
        }else{
          json.results.forEach(el => {

         
            card.innerHTML+=
            `
            <div class="col" >
              <div class="card h-100 border-primary text-white bg-dark">
              <img src="${el.background_image}" alt="${el.name}" class="w-100"/>
                <div class="card-body">
                  <h5 class="card-title text-center">${el.name}</h5>              
                  <p class="card-text">id:${el.id}</p>
                  <p class="card-text">Released: ${el.released}</p>
                  <p class="card-text">Rating: ${el.rating}</p>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Ver Mas</button>
                </div>
              </div>
            </div>
            `;





            
          }
          );
          
        }
      } catch (err) {
        console.log(err);
        let mensaje= err.statusText || "ocurrio un Error";
        card.innerHTML=`<p>Error ${err.status}: ${mensaje}</p>`
      }
    }
  }
})
*/
