import um from '../../Assets/Category/category_card_pink_bg.svg'
import dois from '../../Assets/Category/category_card_lightblue_bg.svg'
import tres from '../../Assets/Category/category_card_red_bg.svg'
import quatro from '../../Assets/Category/category_card_orange_bg.svg'
import cinco from '../../Assets/Category/category_card_green_bg.svg'
import './top10.css'

export default function Top10() {
    return (
        <section className="top10" id='top10'>
            <div className="container-top10">
                <h1 className='title-top10'>TOP 10</h1>
                <h1 className='subtitle-top10'>OS MELHORES DE CADA CATEGORIA</h1>

                <div className="row-top10">

                    <div className="card-person-top10">
                        <div className="img-container-top10">
                            <img src={um} alt="card um" />
                        </div>
                    </div>

                    <div className="card-person-top10">
                        <div className="img-container-top10">
                            <img src={dois} alt="card dois" />
                        </div>
                    </div>

                    <div className="card-person-top10">
                        <div className="img-container-top10">
                            <img src={tres} alt="card tres" />
                        </div>
                    </div>

                    <div className="card-person-top10">
                        <div className="img-container-top10">
                            <img src={quatro} alt="card quatro" />
                        </div>
                    </div>

                    <div className="card-person-top10">
                        <div className="img-container-top10">
                            <img src={cinco} alt="card cinco" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );

}