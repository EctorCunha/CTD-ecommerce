import anna from '../../Assets/About/anna.jpeg'
import dafne from '../../Assets/About/dafne.jpg'
import ector from '../../Assets/About/ector.jpeg'
import nayla from '../../Assets/About/nayla.jpeg'
import pedro from '../../Assets/About/pedro.jpg'
import logo_git from '../../Assets/About/git.png'
import logo_linkedin from '../../Assets/About/linkedin.png'
import './categories.css';

export default function Categories() {
  return (
    <main class="page">
      <div class="container">
        <h2>Categorias</h2>
        <div class="row">
          <div class="card-person">
            <div class="img-container">
              <img src={anna} alt="foto anna" />
            </div>
            <div class="icons-container">
              <a href="https://github.com/annagrl" target="_blank" rel="noreferrer"><img src={logo_git} alt="" class="logo_social" /></a>
              <a href="https://www.linkedin.com/in/annagabrieleribeirolopes/" target="_blank" rel="noreferrer"><img src={logo_linkedin} alt="" class="logo_social" id="linkedin" /></a>
            </div>
            <div class="infos" id="info_x">
              <h3>Anna Lopes</h3>
            </div>
          </div>
          <div class="card-person">
            <div class="img-container" id="foto_x">
              <img src={dafne} alt="foto x" />
            </div>
            <div class="icons-container">
              <a href="https://github.com/DafneBarbosa" target="_blank" rel="noreferrer"><img src={logo_git} alt="" class="logo_social" /></a>
              <a href="https://www.linkedin.com/in/dafnebarbosa/" target="_blank" rel="noreferrer"><img src={logo_linkedin} alt="" class="logo_social" id="linkedin" /></a>
            </div>
            <div class="infos" id="info_x">
              <h3>Dafne Barbosa</h3>
            </div>
          </div>
          <div class="card-person">
            <div class="img-container" id="foto_x">
              <img src={ector} alt="foto x" />
            </div>
            <div class="icons-container">
              <a href="https://github.com/DafneBarbosa" target="_blank" rel="noreferrer"><img src={logo_git} alt="" class="logo_social" /></a>
              <a href="https://www.linkedin.com/in/ector-cunha-b7892411a/" target="_blank" rel="noreferrer"><img src={logo_linkedin} alt="" class="logo_social" id="linkedin" /></a>
            </div>
            <div class="infos" id="info_x">
              <h3>Ector Cunha</h3>
            </div>
          </div>
          <div class="card-person">
            <div class="img-container" id="foto_x">
              <img src={nayla} alt="foto x" />
            </div>
            <div class="icons-container">
              <a href="https://github.com/naylaueda" target="_blank" rel="noreferrer"><img src={logo_git} alt="" class="logo_social" /></a>
              <a href="https://www.linkedin.com/in/nayla-ueda/" target="_blank" rel="noreferrer"><img src={logo_linkedin} alt="" class="logo_social" id="linkedin" /></a>
            </div>
            <div class="infos" id="info_x">
              <h3>Nayla Ueda</h3>
            </div>
          </div>
          <div class="card-person">
            <div class="img-container" id="foto_ped">
              <img src={pedro} alt="Foto Pedro" />
            </div>
            <div class="icons-container">
              <a href="https://github.com/pdrmenezes" target="_blank" rel="noreferrer"><img src={logo_git} alt="" class="logo_social" /></a>
              <a href="https://www.linkedin.com/in/pdrmenezes/" target="_blank" rel="noreferrer"><img src={logo_linkedin} alt="" class="logo_social" id="linkedin" /></a>
            </div>
            <div class="infos" id="info_ped">
              <h3>Pedro Menezes</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}