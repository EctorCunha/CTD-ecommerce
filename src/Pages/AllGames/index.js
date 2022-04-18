import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import './allGames.css'
import getProducts from "../../Services/getProducts";
import icone_jogadores from "../../Assets/Basic/icon-players.svg";
import icone_tempo from "../../Assets/Basic/icon-clock.svg"
import icone_age from "../../Assets/Basic/icon-age.svg"

export default function AllGames() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  function clearStates(){}

  async function getAllProducts() {
    try {
      const data = getProducts(setProducts,clearStates);
    } catch (error) {
      alert("Erro ao buscar Produtos " + error);
    }
  }

  return (
    <section className='choose_your_game'>
      <div className='header'></div>
      <div>
        <h1>ESCOLHA SEU JOGO</h1>
        <ul className="product_container">
          {products.map((produtc) =>
          (
            <Link to={'/aboutyourgame/'+produtc.id}>
            <li className="product_card" id={"category"+produtc.category_id}>
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