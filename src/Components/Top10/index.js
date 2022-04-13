import um from '../../Assets/Category/category_card_pink_bg.svg'
import dois from '../../Assets/Category/category_card_lightblue_bg.svg'
import tres from '../../Assets/Category/category_card_red_bg.svg'
import quatro from '../../Assets/Category/category_card_orange_bg.svg'
import cinco from '../../Assets/Category/category_card_green_bg.svg'
import colecionavel from '../../Assets/Category/category_card_pink.svg'
import viagem from '../../Assets/Category/category_card_lightblue.svg'
import cooperativo from '../../Assets/Category/category_card_red.svg'
import expert from '../../Assets/Category/category_card_orange.svg'
import party from '../../Assets/Category/category_card_green.svg'
import './top10.css'

export default function Top10() {
    return (
        <section className="top10" id='top10'>
            <div className="container-top10">
                <h1 className='title-top10'>TOP 10</h1>
                <h1 className='subtitle-top10'>OS MELHORES DE CADA CATEGORIA</h1>

                <div className="row-top10">


                <div class="card-person-top10">
                    <div class="img-container-top10">
                    <input type="checkbox" id="switch01" />
                    <label class="flip-container" for="switch01" >
                        <div class="flipper">
                            <div class="front">
                                <img src={um} alt="card um" />
                            </div>
                            <div class="back">
                                <img src={colecionavel} alt="card um" />
                            </div>
                        </div>
                    </label>

                    
                        </div>

                    </div>


                <div class="card-person-top10">
                    <div class="img-container-top10">
                    <input type="checkbox" id="switch02" />
                    <label class="flip-container" for="switch02" >
                        <div class="flipper">
                            <div class="front">
                                <img src={dois} alt="card um" />
                            </div>
                            <div class="back">
                                <img src={viagem} alt="card um" />
                            </div>
                        </div>
                    </label>

                    
                        </div>

                    </div>


                <div class="card-person-top10">
                    <div class="img-container-top10">
                    <input type="checkbox" id="switch03" />
                    <label class="flip-container" for="switch03" >
                        <div class="flipper">
                            <div class="front">
                                <img src={tres} alt="card um" />
                            </div>
                            <div class="back">
                                <img src={cooperativo} alt="card um" />
                            </div>
                        </div>
                    </label>

                    
                        </div>

                    </div>


                <div class="card-person-top10">
                    <div class="img-container-top10">
                    <input type="checkbox" id="switch04" />
                    <label class="flip-container" for="switch04" >
                        <div class="flipper">
                            <div class="front">
                                <img src={quatro} alt="card um" />
                            </div>
                            <div class="back">
                                <img src={expert} alt="card um" />
                            </div>
                        </div>
                    </label>

                    
                        </div>

                    </div>


                <div class="card-person-top10">
                    <div class="img-container-top10">
                    <input type="checkbox" id="switch05" />
                    <label class="flip-container" for="switch05" >
                        <div class="flipper">
                            <div class="front">
                                <img src={cinco} alt="card um" />
                            </div>
                            <div class="back">
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