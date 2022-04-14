import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cart";
import getProducts from "../../Services/getProducts";
import "./styles.css";

export default function Home() {
  const { addProducToCart, removeProductsCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  function clearStates() {}

  useEffect(() => {
    getProducts(setProducts, clearStates);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div className="cart">
          <div className="container">
            <h2>Título: {product.title}</h2>
            <h3>Descrição: {product.description}</h3>
            <h3>Minimo players: {product.minimumPlayersNumber}</h3>
            <h3>Maximo players: {product.maximumPlayersNumber}</h3>
            <h3>Idade mínima: {product.minimumAge}</h3>
            <h3>Tempo de jogo: {product.playingTime}</h3>
            <h3>Idioma: {product.language}</h3>
            <h3>Preço: {product.price}</h3>
            <h3>Categoria: {product.category}</h3>
            <button onClick={() => addProducToCart(product.id, product.title, product.minimumAge, product.language, product.price, product.image)}>adicionar ao carrinho</button>
            <button onClick={() => removeProductsCart(product.id)}>remover ao carrinho</button>
          </div>
          <img src={product.image} />
        </div>
      ))}
      <Link to="/cart">Ver carrinho</Link>
    </div>
  );
}
