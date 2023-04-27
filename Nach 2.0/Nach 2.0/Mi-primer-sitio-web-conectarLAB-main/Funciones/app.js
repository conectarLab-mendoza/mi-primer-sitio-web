/* Renderizado generico */
window.onload = () => {
  document.querySelector("header").innerHTML = `
  <div class="header-escritorio">
    <a title="Conectar LAB" href="#top">
      <img class="header-logo" src="./logosConectar/logoConectarLab.png" alt="Logo de Conectar LAB" />
    </a>
    <nav class="header-nav" >
      <ul>
        <li><a href="#top">Inicio</a></li>
        <li><a href="#images">Imagenes</a></li>
        <li><a href="#info">Información</a></li>
      </ul>
    </nav>
    <button class="menu-hamburguesa" href="" onclick="precionarInterruptor()">
      <i class="menu-hamburguesa-icono fa-solid fa-bars"></i>
    </button>
  </div>
  <nav class="menu-hamburguesa-nav">
    <ul>
      <li><a href="#top">Inicio</a></li>
      <li><a href="#images">Imagenes</a></li>
      <li><a href="#info">Información</a></li>
    </ul>
  </nav>
  `;

  document.querySelector(".contacto").innerHTML =`
  <img src="./logosConectar/logoConectarLab.png"  >
  <div class="contacto-info">
    <h1>¡Seguinos en nuestras redes sociales!</h1>
    <div>
      <a target="_blank" href="https://www.instagram.com/conectarlabmendoza/"><i class="rosado fa-brands fa-square-instagram"></i></a>
      <a target="_blank" href="https://www.facebook.com/conectarlabmendoza/"><i class="celeste fa-brands fa-square-facebook"></i></a>
    </div>
  </div>
  `;

  document.querySelector("footer").innerHTML = `
  <div>
  <img title="Explosion" class="footer-logo" src="./FotitosJr/Explosion.png" alt="Logo Explosion">
  <img title="N" class="footer-logo" src="./FotitosJr/N.png" alt="Logo N">
  <img title="A" class="footer-logo" src="./FotitosJr/A.png" alt="Logo A">
  <img title="C" class="footer-logo" src="./FotitosJr/C.png" alt="Logo C">
  <img title="H" class="footer-logo" src="./FotitosJr/H.png" alt="Logo H">
  


  </div>
  <a title="Conectar LAB" href="#top">
    <img class="header-logo" src="./logosConectar/logoConectarLab.png"  >
  </a>
`;
};

function precionarInterruptor() {
  document.querySelector(".menu-hamburguesa-nav").classList.toggle("visible");
  document.querySelector(".menu-hamburguesa-icono").classList.toggle("fa-bars-staggered");
}







