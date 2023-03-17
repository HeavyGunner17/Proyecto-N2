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


function displayGames(games) {
    let coso=[];
    
      games.forEach(game => {
        const { id, name, background_image, released, rating ,genres} = game;
        
          
       
        card.innerHTML +=
          `
            <div class="col" >
              <div class="card h-100 border-primary text-white bg-dark">
              
              <img src="${background_image}" alt="${name}" class="h-50" />
                <div class="card-body">
                  <h5 class="card-title text-center">${name}</h5>                                               
                </div>
                <div class="d-grid gap-2"> 
                <a class="btn btn-outline-success" href="./error404.html"><i class="fa-sharp fa-solid fa-cart-shopping"> Shop Now!</i></a>                                     
                    <a  href="../Paginas/detalles.html" class="btn btn-primary" onclick="capturar(${id})">    
                    See More Details
                    </a>                                                
                </div>
              </div>
            </div>
            `;
    
      });
    }


let valor = [];
function capturar(id){

   let valor= id;
   let nuevo = valor.toString();
  
//localStorage.setItem("detail", JSON.stringify(nuevo))

localStorage.setItem('detail',valor)
  console.log(localStorage.getItem('detail'))


}


getGames(URL)
.then(
  (r)=>{
    console.log("Se esta Ejecuto correctamente");
  }
)
.catch((e)=>{console.warn(e);});
/* 
const  getGamesByName = async (name) => {
  try {
      let result = await fetch(`https://api.rawg.io/api/games?key=85458154fdcb4c3abf3290a579a65e18&search=${name}`);
      
      result = await result.json();
      
      console.log(result);

  } catch (error) {
      console.error(err);
  };
};
*/
