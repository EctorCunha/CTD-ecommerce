import { useState, useEffect, useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import { CartContext } from "../../Context/cart";
import "./aboutYourGame.css";
import getProductById from "../../Services/getProductById";
import icone_jogadores from "../../Assets/Basic/icon-players.svg";
import icone_tempo from "../../Assets/Basic/icon-clock.svg"
import icone_age from "../../Assets/Basic/icon-age.svg"

export default function AboutYourGame() {
  const parametros = useParams();
  const [product, setProduct] = useState({});
  const { addProducToCart, removeProductsCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    try {
      const data = getProductById(parametros.code, setProduct)
    } catch (error) {
      alert("Erro ao buscar Produtos " + error);
    }
  }

  return (
    <section className="about_your_game" id={"about_your_game" + product.category_id}>
      <div>
        <h1 className="title-about-your-game">SOBRE SEU JOGO</h1>
      </div>

      <div className="game">

        <div className="game-image">
          <img src={product.image} alt="imagem de um jogo" />
        </div>

        <div className="game_container" id={"game_container" + product.category_id}>
          <div className="game-info">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="price">
              <span>R$ {product.price}</span>
              <Link to={"/cart"}>
                <button className="btn" onClick={() => addProducToCart(product.id, product.title, product.minimumAge, product.language, product.price, product.image)}>COMPRAR!</button>
              </Link>
            </div>
          </div>

          <div className="product_infos">
            <div className="product_info">
              <img src={icone_jogadores}></img>
              <p>{product.minimumPlayersNumber} - {product.maximumPlayersNumber} jogadores</p>
            </div>
            <div className="product_info">
              <img src={icone_tempo}></img>
              <p>{product.playingTime} min</p>
            </div>
            <div className="product_info">
              <img src={icone_age}></img>
              <p>{product.minimumAge} anos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
