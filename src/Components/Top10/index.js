import um from "../../Assets/Category/category_card_pink_bg.svg";
import dois from "../../Assets/Category/category_card_lightblue_bg.svg";
import tres from "../../Assets/Category/category_card_red_bg.svg";
import quatro from "../../Assets/Category/category_card_orange_bg.svg";
import cinco from "../../Assets/Category/category_card_green_bg.svg";
import colecionavel from "../../Assets/Category/category_card_pink.svg";
import viagem from "../../Assets/Category/category_card_lightblue.svg";
import cooperativo from "../../Assets/Category/category_card_red.svg";
import expert from "../../Assets/Category/category_card_orange.svg";
import party from "../../Assets/Category/category_card_green.svg";
import "./top10.css";

export default function Top10() {
  return (
    <section className="top10" id="top10">
      <div className="container-top10">
        <h1 className="title-top10">TOP 10</h1>
        <h1 className="subtitle-top10">OS MELHORES DE CADA CATEGORIA</h1>

        <div className="row-top10">
          <div class="card-person-top10">
            <div class="img-container-top10">
              <label class="flip-container-top10" for="switch1">
                <div class="flipper-top10">
                  <div class="front-top10">
                    <img src={um} alt="card um" />
                  </div>
                  <div class="back-top10">
                    <img src={colecionavel} alt="card um" />
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="card-person-top10">
            <div class="img-container-top10">
              <label class="flip-container-top10" for="switch2">
                <div class="flipper-top10">
                  <div class="front-top10">
                    <img src={dois} alt="card um" />
                  </div>
                  <div class="back-top10">
                    <img src={viagem} alt="card um" />
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="card-person-top10">
            <div class="img-container-top10">
              <label class="flip-container-top10" for="switch3">
                <div class="flipper-top10">
                  <div class="front-top10">
                    <img src={tres} alt="card um" />
                  </div>
                  <div class="back-top10">
                    <img src={cooperativo} alt="card um" />
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="card-person-top10">
            <div class="img-container-top10">
              <label class="flip-container-top10" for="switch4">
                <div class="flipper-top10">
                  <div class="front-top10">
                    <img src={quatro} alt="card um" />
                  </div>
                  <div class="back-top10">
                    <img src={expert} alt="card um" />
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="card-person-top10">
            <div class="img-container-top10">
              <label class="flip-container-top10" for="switch5">
                <div class="flipper-top10">
                  <div class="front-top10">
                    <img src={cinco} alt="card um" />
                  </div>
                  <div class="back-top10">
                    <img src={party} alt="card um" />
                  </div>
                </div>
              </label>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
