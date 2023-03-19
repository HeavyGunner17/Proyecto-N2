
function generateNavbar() {
    let navbar = document.getElementById('navbar')
    navbar.innerHTML = `<header>
    <section class="nav_bar">
      <nav class="navbar navbar-expand-lg bg-transparent fixed-top navbar-background ">
        <div class="container-fluid">
          <a class="navbar-brand" href="../index.html">
            <img src="../IMG/monkeyGames_logo_horizontal.png" class="img-fluid" alt="logo" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars icon_navbar_collapse"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item m-2">
                <a class="nav-link active text-white" aria-current="page" href="../index.html">Home</a>
              </li>
              <li class="nav-item m-2">
                <a class="nav-link" href="../Paginas/busqueda.html">Search</a>
              </li>
              <li class="nav-item m-2">
                <a class="nav-link" href="../Paginas/contacto.html">Contact</a>
              </li>
              <li class="nav-item m-2">
                <a class="nav-link" href="../Paginas/nosotros.html">About</a>
              </li>
              <li class="nav-item m-2" id="navbar-login"></li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  </header>



  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="container-fluid">
        <div class="modal-content">
          <div style="display: flex; justify-content: end; padding: 0.5em;">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModal"></button>
          </div>
          <div class="modal-body modal-container">
            <div class="bimo"><img src="../IMG/bimo.webp" alt="bimo" id="bim" />
            </div>
            <div class="sign-in">
              <form onsubmit="validate(event,'login')">
                <h6>Sign In here!</h6>
                <label class="form-label mt-3" for="username">Username</label>
                <input type="text" id="username" class="form-control form-control-lg" required />
                <label class="form-label" for="password">Password</label>
                <input type="password" id="password" class="form-control form-control-lg" title="8 characters minimum."
                  minlength="8" required />
                <div><a class="passRecover" href="./Paginas/recuperacionPassword.html">Did you forget your password?</a>
                </div>
                <div>
                  <button type="submit" class="btn text-white mt-3 button-color">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div class="create-account">
              <form onsubmit="validate(event,'create')">
                <h6>Register here!</h6>
                <label class="form-label mt-3" for="newUsername">Username</label>
                <input type="text" id="newUsername" class="form-control form-control-lg" required />
                <label class="form-label" for="userEmail">Email</label>
                <input type="email" id="userEmail" class="form-control form-control-lg" required />
                <label class="form-label mt-3" for="securityQuestion">Security question</label>
                <div>
                  <select name="question" id="securityQuestion">
                    <option>What is your favourite color?</option>
                    <option>What is your cat's name?</option>
                    <option>What is your dog's name?</option>
                    <option>What is your mother's name?</option>
                  </select>
                </div>
                <label class="form-label mt-3" for="securityAnswer">Answer</label>
                <input type="text" id="securityAnswer" class="form-control form-control-lg" required />
                <label class="form-label" for="newPassword" class="cols-sm-2 control-label">Password</label>
                <input type="password" id="newPassword" class="form-control form-control-lg"
                  title="8 characters minimum." minlength="8" required />
                <label for="confirm" class="cols-sm-2 control-label">Confirm password</label>
                <input type="password" class="form-control form-control-lg" name="confirm" id="confirm" required />
                <button type="submit" class="btn text-white mt-3 button-color" id="createAccount">
                  Create account
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`
}

generateNavbar()




function generateFooter() {
    let footer = document.getElementById('footer')
    footer.innerHTML = `
    <footer class="pie-pagina container-fluid pt-3" style="margin-top:230px">
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