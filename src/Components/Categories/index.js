import colecionavel from '../../Assets/Category/category_card_pink.svg';
import viagem from '../../Assets/Category/category_card_lightblue.svg';
import cooperativo from '../../Assets/Category/category_card_red.svg';
import expert from '../../Assets/Category/category_card_orange.svg';
import party from '../../Assets/Category/category_card_green.svg';
import family from '../../Assets/Category/category_card_darkblue.svg';
import './categories.css';

export default function Categories() {
  return (
    <section className="page-category" id='page-category'>
      <div className="container-category">
        <h1 className='title-category'>ESCOLHA A CATEGORIA DO SEU JOGO</h1>
        <div className="row-category">

          <div className="card-person-category">
            <div className="img-container-category">
              <img src={colecionavel} alt="card colecionável" />
            </div>
          </div>

          <div className="card-person-category">
            <div className="img-container-category">
              <img src={viagem} alt="card viagem" />
            </div>
          </div>

          <div className="card-person-category">
            <div className="img-container-category">
              <img src={cooperativo} alt="card cooperativo" />
            </div>
          </div>

          <div className="card-person-category">
            <div className="img-container-category">
              <img src={expert} alt="card expert" />
            </div>
          </div>

          <div className="card-person-category">
            <div className="img-container-category">
              <img src={party} alt="card party" />
            </div>
          </div>

          <div className="card-person-category">
            <div className="img-container-category">
              <img src={family} alt="card family" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}