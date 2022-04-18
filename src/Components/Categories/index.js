import logoHome from "../../Assets/Basic/logo-gamenight.svg";
import um from "../../Assets/Category/category_card_pink_bg.svg";
import dois from "../../Assets/Category/category_card_lightblue_bg.svg";
import tres from "../../Assets/Category/category_card_red_bg.svg";
import quatro from "../../Assets/Category/category_card_orange_bg.svg";
import cinco from "../../Assets/Category/category_card_green_bg.svg";
import seis from "../../Assets/Category/category_card_darkblue_bg.svg";
import colecionavel from "../../Assets/Category/category_card_pink.svg";
import viagem from "../../Assets/Category/category_card_lightblue.svg";
import cooperativo from "../../Assets/Category/category_card_red.svg";
import expert from "../../Assets/Category/category_card_orange.svg";
import party from "../../Assets/Category/category_card_green.svg";
import family from "../../Assets/Category/category_card_darkblue.svg";
import { Link } from "react-router-dom";
import "./categories.css";

export default function Categories() {
  return (
    <section className="page-category" id="categories">
      <div className="transition2"></div>
      <div className="container-category">
        <h1 className="title-category">ESCOLHA A CATEGORIA DO SEU JOGO</h1>

        <div className="row-category">

          <div class="card-person-category">
            <div class="img-container-category">
              <input type="checkbox" id="switch01" />
              <label class="flip-container" for="switch01">
                <div class="flipper">
                  <div class="front">
                    <img src={um} alt="card um" />
                    <img className="img_2" id="pink" src={logoHome} />
                  </div>
                  <div class="back">
                    <Link to={"/chooseyourgame/" + 1}>
                      <img src={colecionavel} alt="card um" />
                    </Link>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="card-person-category">
            <div class="img-container-category">
              <input type="checkbox" id="switch02" />
              <label class="flip-container" for="switch02">
                <div class="flipper">
                  <div class="front">
                    <img src={dois} alt="card dois" />
                    <img className="img_2" id="lightBlue" src={logoHome} />
                  </div>
                  <div class="back">
                    <Link to={"/chooseyourgame/" + 6}>
                      <img src={viagem} alt="card dois" />
                    </Link>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="card-person-category">
            <div class="img-container-category">
              <input type="checkbox" id="switch03" />
              <label class="flip-container" for="switch03">
                <div class="flipper">
                  <div class="front">
                    <img src={tres} alt="card tres" />
                    <img className="img_2" id="red" src={logoHome} />
                  </div>
                  <div class="back">
                    <Link to={"/chooseyourgame/" + 2}>
                      <img src={cooperativo} alt="card tres" />
                    </Link>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="card-person-category">
            <div class="img-container-category">
              <input type="checkbox" id="switch04" />
              <label class="flip-container" for="switch04">
                <div class="flipper">
                  <div class="front">
                    <img src={quatro} alt="card quatro" />
                    <img className="img_2" id="orange" src={logoHome} />
                  </div>
                  <div class="back">
                    <Link to={"/chooseyourgame/" + 3}>
                      <img src={expert} alt="card quatro" />
                    </Link>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="card-person-category">
            <div class="img-container-category">
              <input type="checkbox" id="switch05" />
              <label class="flip-container" for="switch05">
                <div class="flipper">
                  <div class="front">
                    <img src={cinco} alt="card cinco" />
                    <img className="img_2" id="green" src={logoHome} />
                  </div>
                  <div class="back">
                    <Link to={"/chooseyourgame/" + 5}>
                      <img src={party} alt="card cinco" />
                    </Link>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="card-person-category">
            <div class="img-container-category">
              <input type="checkbox" id="switch06" />
              <label class="flip-container" for="switch06">
                <div class="flipper">
                  <div class="front">
                    <img src={seis} alt="card seis" />
                    <img className="img_2" id="darkBlue" src={logoHome} />
                  </div>
                  <div class="back">
                    <Link to={"/chooseyourgame/" + 4}>
                      <img src={family} alt="card seis" />
                    </Link>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="transition1"></div>
    </section>
  );
}
