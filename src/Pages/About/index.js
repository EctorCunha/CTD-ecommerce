import "./about.css";
import anna from "../../Assets/About/anna.jpeg";
import dafne from "../../Assets/About/dafne.jpg";
import ector from "../../Assets/About/ector.jpeg";
import nayla from "../../Assets/About/nayla.jpeg";
import pedro from "../../Assets/About/pedro.jpg";
import logo_github from "../../Assets/About/git.png";
import logo_linkedin from "../../Assets/About/linkedin.png";


export default function About() {
  return (
    <main className="page">
      <div className="about_header"></div>
      <div className="container">
        <h1 className="about-title">Sobre Nós</h1>
        <div className="row-cards">
          <div className="card">
            <div className="card_inner">
              <div className="card_face card_face-front card_face-anna">
                <h2>Anna</h2>
              </div>
              <div className="card_face card_face-back card_face-anna">
                <div className="card_content">
                  <div className="card_header">
                    <img src={anna} className="profile-picture" alt="anna" />
                  </div>
                  <div className="card_body">
                    <h3>Anna Lopes</h3>
                    <div className="icons-container">
                      <a href="https://github.com/annagrl" target="_blank" rel="noreferrer">
                        <img src={logo_github} alt="" className="logo_social" id="github" />
                      </a>
                      <a href="https://www.linkedin.com/in/annagabrieleribeirolopes/" target="_blank" rel="noreferrer">
                        <img src={logo_linkedin} alt="logo linkedin" className="logo_social" id="linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card_inner">
              <div className="card_face card_face-front card_face-dafne">
                <h2>Dafne</h2>
              </div>
              <div className="card_face card_face-back card_face-dafne">
                <div className="card_content">
                  <div className="card_header">
                    <img src={dafne} className="profile-picture" alt="dafne" />
                  </div>
                  <div className="card_body">
                    <h3>Dafne Barbosa</h3>
                    <div className="icons-container">
                      <a href="https://github.com/DafneBarbosa" target="_blank" rel="noreferrer">
                        <img src={logo_github} alt="" className="logo_social" id="github" />
                      </a>
                      <a href="https://www.linkedin.com/in/dafnebarbosa/" target="_blank" rel="noreferrer">
                        <img src={logo_linkedin} alt="logo linkedin" className="logo_social" id="linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card_inner">
              <div className="card_face card_face-front card_face-ector">
                <h2>Ector</h2>
              </div>
              <div className="card_face card_face-back card_face-ector">
                <div className="card_content">
                  <div className="card_header">
                    <img src={ector} className="profile-picture" alt="ector" />
                  </div>
                  <div className="card_body">
                    <h3>Ector Cunha</h3>
                    <div className="icons-container">
                      <a href="https://github.com/EctorCunha" target="_blank" rel="noreferrer">
                        <img src={logo_github} alt="" className="logo_social" id="github" />
                      </a>
                      <a href="https://www.linkedin.com/in/ector-cunha-b7892411a" target="_blank" rel="noreferrer">
                        <img src={logo_linkedin} alt="logo linkedin" className="logo_social" id="linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card_inner">
              <div className="card_face card_face-front card_face-nayla">
                <h2>Nayla</h2>
              </div>
              <div className="card_face card_face-back card_face-nayla">
                <div className="card_content">
                  <div className="card_header">
                    <img src={nayla} className="profile-picture" alt="nayla" />
                  </div>
                  <div className="card_body">
                    <h3>Nayla Ueda</h3>
                    <div className="icons-container">
                      <a href="https://github.com/naylaueda" target="_blank" rel="noreferrer">
                        <img src={logo_github} alt="" className="logo_social" id="github" />
                      </a>
                      <a href="https://www.linkedin.com/in/nayla-ueda/" target="_blank" rel="noreferrer">
                        <img src={logo_linkedin} alt="logo linkedin" className="logo_social" id="linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card_inner">
              <div className="card_face card_face-front card_face-pedro">
                <h2>Pedro</h2>
              </div>
              <div className="card_face card_face-back card_face-pedro">
                <div className="card_content">
                  <div className="card_header">
                    <img src={pedro} className="profile-picture" alt="pedro" />
                  </div>
                  <div className="card_body">
                    <h3>Pedro Menezes</h3>
                    <div className="icons-container">
                      <a href="https://github.com/pdrmenezes" target="_blank" rel="noreferrer">
                        <img src={logo_github} alt="" className="logo_social" id="github" />
                      </a>
                      <a href="https://www.linkedin.com/in/pdrmenezes/" target="_blank" rel="noreferrer">
                        <img src={logo_linkedin} alt="logo linkedin" className="logo_social" id="linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
