const verMas = document.getElementById('detalleid');
const car = document.getElementById('detail-template');

let nombre="";
let description="";
let background_image="";

let website ="";
let rating="";
let platforms=[];

async function detalle(id){
    let valor= id;
  console.log(valor);
  //console.log("hola desde otro lado"+ valor);
  const api= `https://api.rawg.io/api/games/${id}?key=85458154fdcb4c3abf3290a579a65e18`
       const res = await fetch(api);
        const json = await res.json();

       // console.log("imprimo RES",res);
    //console.log("imprimo JSON",json.description);
    //window.location.href="./detalle.html"
             // car.innerHTML="";
          
         
    
    nombre =json.name;
    description =json.description;
    background_image =json.background_image;
   
    website = json.website;
    rating= json.rating;
    
    //console.log(nombre, description);
  console.log(website);

//window.location.href="./detalle.html";
//displayGames2();



}


