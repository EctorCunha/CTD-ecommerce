import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import './chooseYourGame.css'
import filterByCategory from "../../Services/filterByCategory";
import getCategories from "../../Services/getCategories";
import icone_jogadores from "../../Assets/Basic/icon-players.svg";
import icone_tempo from "../../Assets/Basic/icon-clock.svg"
import icone_age from "../../Assets/Basic/icon-age.svg"

export default function ChooseYouGame() {
  const parametros = useParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts();
    getCategories(setCategories);
  }, []);

  async function getProducts() {
    try {
      const data = filterByCategory(parametros.code, setProducts)
    } catch (error) {
      alert("Erro ao buscar Produtos " + error);
    }
  }

  return (
    <section className='choose_your_game' id={'choose_your_game'+parametros.code}>
      <div className='header'></div>
      <div>
        <h1>ESCOLHA SEU JOGO</h1>
        {categories.filter(category => category.id==parametros.code).map(category => (<h3 className={"category"+category.id}>{("Categoria "+category.name).toUpperCase()}</h3>))} 
        <ul className="product_container">
          {products.map((produtc) =>
          (
            <Link to={'/aboutyourgame/'+produtc.id}>
            <li className="product_card">
              <img className="product_image" src={produtc.image}></img>
              <div>
                <h2>{produtc.title}</h2>
                <div className="product_infos">
                  <div className="product_info">
                    <img src={icone_jogadores}></img>
                    <p>{produtc.minimumPlayersNumber} - {produtc.maximumPlayersNumber} jogadores</p>
                  </div>
                  <div className="product_info">
                    <img src={icone_tempo}></img>
                    <p>{produtc.playingTime} min</p>
                  </div>
                  <div className="product_info">
                    <img src={icone_age}></img>
                    <p>{produtc.minimumAge} anos</p>
                  </div>
                </div>
              </div>
            </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='footer'></div>
    </section>
  )
}