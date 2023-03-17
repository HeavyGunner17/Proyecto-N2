

const URL = "https://api.rawg.io/api/games?key=85458154fdcb4c3abf3290a579a65e18";

let card = document.getElementById('card-template');

async function getGames(url) {
    const res = await fetch(url);
    const data = await res.json();
    //console.log("Estoy consumiendo API");
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
                <div class="d-grid gap-2 mb-2">
                   
                   
                    <a  href="./Paginas/detalles.html" class="btn btn-primary" onclick="capturar(${id})">
    
                    See More Details
                    </a>
                    <a class="btn btn-outline-success" href="./error404.html"><i class="fa-sharp fa-solid fa-cart-shopping"> Shop Now!</i></a>
    
                    
                    
    
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



    getGames(URL);



function confirmLogout() {
    Swal.fire({
        title: 'Are you sure you want to log out??',
        icon: 'info',
        showDenyButton: true,
        confirmButtonText: 'Yes, i want to leave',
        confirmButtonColor: '#269cb5',
        denyButtonText: `Stay`,
        denyButtonColor: '#44b91f',
    }).then(async (result) => {
        if (result.isConfirmed) {
            await Swal.fire({ text: 'You have successfully logged out!', icon: 'success', confirmButtonColor: '#269cb5'})
            logout()
        } else if (result.isDenied) {
            Swal.fire({ text: 'You chose to stay signed in', icon: 'info', })
        }
    })
}
