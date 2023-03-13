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


   // console.log(data.results);
    displayGames(data.results);
    
}



function displayGames(games){


    games.forEach(game=> {
        const{id,name, background_image, released, rating}=game;
        
        card.innerHTML+=
        `
        <!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" id="modal-detail">
     
    </div>
  </div>
</div>


        <div class="col" >
          <div class="card h-100 border-primary text-white bg-dark">
          <img src="${background_image}" alt="${name}" class="h-50"/>
            <div class="card-body">
              <h5 class="card-title text-center">${name}</h5>              
              
             
            </div>
            <div class="d-grid gap-2">
               
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="detalleid" onclick="detalle(${id})">
                See More 
                </button>
            </div>
          </div>
        </div>
        `;
        
    });
}

async function detalle(id){
    let valor= id;
  console.log(valor);
  //console.log("hola desde otro lado"+ valor);
  const api= `https://api.rawg.io/api/games/${id}?key=85458154fdcb4c3abf3290a579a65e18`
       const res = await fetch(api);
        const json = await res.json();
        const modal = document.getElementById('modal-detail')
       // console.log("imprimo RES",res);
    console.log("imprimo Detalles",json);
    //window.location.href="./detalle.html"
              modal.innerHTML="";
          modal. innerHTML+=`
          
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
      
    
  
  //console.log(json.website);
  
  
  
  
  
  
  }
  
  




getGames(URL)
.then(
  (r)=>{
    //console.log("Se esta Ejecutando la promesa");
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


/*FUNCION ENVIAR JUEGOS HARD COD AL LS*/
class juegoHardCode {
  constructor (codigo,nombre,category,descripcion,publicado) {
    this.codigo=codigo,
    this.nombre=nombre,
    this.category=category,
    this.descripcion=descripcion,
    this.publicado=publicado}
  }
  let juegosHardCod =[];

  function capturaJuegosPantalla (){
  const juegosEnPantalla = document.querySelectorAll('.juegoHard');
  for (contenedor of juegosEnPantalla){
    let codigoJ =contenedor.querySelector('.codi').textContent;
    let nomJ = contenedor.querySelector('.titu').textContent;
    let categJ = contenedor.querySelector('.catego').textContent;
    let descrJ = contenedor.querySelector('.desc').textContent;
    let publicJ = contenedor.querySelector ('.publ').textContent;
    let juegoPantalla = new juegoHardCode (codigoJ,nomJ,categJ,descrJ,publicJ);
    juegosHardCod.push(juegoPantalla);
  };
  localStorage.setItem('juegos',JSON.stringify(juegosHardCod));
  };

  capturaJuegosPantalla();

function datosDestacado(){
  let datosDestacado= JSON.parse(localStorage.getItem('destacado'));

  let titu = document.getElementById('jdTitu');
  let jdCateg = document.getElementById('jdCatego');
  let jdDescrip = document.getElementById('jdDesc');
  let jdImg = document.getElementById('portada');
  let juegoCivil=document.getElementById('civImg');
  let juegoCk= document.getElementById('ckImg');
  let juegoUniver=document.getElementById('uniImg');
  let juegoWar=document.getElementById('warImg');

  titu.textContent = datosDestacado[0];
  jdCateg.textContent = datosDestacado[1];
  jdDescrip.textContent = datosDestacado [2];

  if(datosDestacado[0]=="Civilización VI"){
    jdImg.src=juegoCivil.src;
  } else if(datosDestacado[0]=="Warcraft III"){
    jdImg.src=juegoWar.src;
  }else if(datosDestacado[0]=="Crusader Kings II"){
    jdImg.src=juegoCk.src;
  }else if(datosDestacado[0]=="Universalis IV"){
    jdImg.src=juegoUniver.src;
  };

}
datosDestacado();