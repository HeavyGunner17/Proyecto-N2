
const prueba =JSON.parse(localStorage.getItem("detail"))
/**
 * console.log(localStorage.getItem('detail'))
console.log("prueba");
console.log(prueba);
console.log(typeof prueba); 
 * 
 */


async function detalle(prueba){
  let valor=localStorage.getItem('detail');

const api= `https://api.rawg.io/api/games/${valor}?key=85458154fdcb4c3abf3290a579a65e18`
//verfico que valor llega a la api
  //console.log(api);
     const res = await fetch(api);
      const json = await res.json();
      const modal = document.getElementById('detail-template');
     // console.log("imprimo RES",res);
  //console.log("imprimo JSON",json.description);
  
        modal.innerHTML="";
        modal. innerHTML+=`
        <div class="row g-0">
        <div class="col-md-4">
          <img
          src="${json.background_image}" 
          alt="${json.name}"     
          class="img-fluid mt-4"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title fw-bold">${json.name}</h2>
            <p class="card-text">${json.description}</p>
            <p class="card-text">
            <p>Released: <span class="fw-bold">${json.released}</span> </p>
              
             <p> Rating: <span class="fw-bold">${json.rating}</span></p>
            </p>
            <div>
            <a class="btn btn-success" href="./404.html"><i class="fa-sharp fa-solid fa-cart-shopping"> Shop Now!</i></a>
            </div>
          </div>
        </div>
      </div>
        `
}

//imagenes
const getImages = async ()=>{
let valor=localStorage.getItem('detail');
const res = await  fetch(`https://api.rawg.io/api/games/${valor}/screenshots?key=85458154fdcb4c3abf3290a579a65e18`)
const json = await res.json()
//console.log(json.results);
const containercards = document.querySelector('#container-cards')
containercards.innerHTML=""
json.results.map((index)=>{
const col = document.createElement('div');
const tarjeta = `
<div class="p-2">
<img src="${index.image}" class="w-100" >
</div>
`
col.innerHTML=tarjeta;
containercards.append(col);
})
}

//videos
const getMovies = async()=>{
  const res = await  fetch(`https://api.rawg.io/api/games/${localStorage.getItem('detail')}/movies?key=85458154fdcb4c3abf3290a579a65e18`)
  const json = await res.json()
  //console.log(json.results);
  const videos = document.querySelector('#videos-container')
  videos.innerHTML=""
  json.results.map((video, index)=>{

if(index===0){
  //let solo =video.data.max
  
  const col = document.createElement('div');
  col.className="container";
  const tarjeta = `
  
  <div class="card border-0">
 
  <video class="text-center" src=${video.data.max} controls >
  </div>
  `
  col.innerHTML=tarjeta;
  videos.append(col);
}
  })
}


detalle();
getImages();
getMovies()





