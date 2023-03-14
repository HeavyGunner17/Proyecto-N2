let card = document.getElementById('card-template');

const query = document.getElementById('search');

const btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener("click",async function(e){
  try {
    const isClick = query.value.toLowerCase();
  

    const   api= `https://api.rawg.io/api/games?key=85458154fdcb4c3abf3290a579a65e18&search=${isClick} `
         const res = await fetch(api);
          const json = await res.json();
  
         // console.log("imprimo RES",res);
          console.log("imprimo JSON",json);
          console.log(isClick);
          if(!res.ok)throw{status:res.status, statusText:res.statusText};

          if(json.results.length ===0){
            
            card.innerHTML=`<h2 style='color:#fff'>No existen resultados de juegos para la busqueda: <mark>${query}</mark></h2>`
          }else{
            card.innerHTML="";
            json.results.forEach(el => {
  
              
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
                <img src="${el.background_image}" alt="${el.name}" class="h-50"/>
                  <div class="card-body">
                    <h5 class="card-title text-center">${el.name}</h5>              
                    
                  </div>
                  <div class="d-grid gap-2">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="detalleid" onclick="detalle(${el.id})">
                  See More 
                  </button>
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
 

        
})

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




query.addEventListener("keypress",async e=>{
  if(e.target.matches("#search")){
    //console.log(e.key);
    if(e.key ==="Enter"){
      try {
        let query=e.target.value.toLowerCase();
     const   api= `https://api.rawg.io/api/games?key=85458154fdcb4c3abf3290a579a65e18&search=${query} `
       const res = await fetch(api);
        const json = await res.json();

       // console.log("imprimo RES",res);
        console.log("imprimo JSON",json);
        if(!res.ok)throw{status:res.status, statusText:res.statusText};

        if(json.results.length ===0){
          
          card.innerHTML=`<h2 style='color:#fff'>No existen resultados de juegos para la busqueda: <mark>${query}</mark></h2>`
        }else{
          card.innerHTML="";
          json.results.forEach(el => {

            
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
              <img src="${el.background_image}" alt="${el.name}" class="h-50"/>
                <div class="card-body">
                  <h5 class="card-title text-center">${el.name}</h5>              
                  <p class="card-text">id:${el.id}</p>
                  <p class="card-text">Released: ${el.released}</p>
                  <p class="card-text">Rating: ${el.rating}</p>
                </div>
                <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="detalleid" onclick="detalle(${el.id})">
                See More 
                </button>
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
