import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/cart"
import "./header.css";
import logo_header from "../../Assets/Header/logo-header.png";
import icon_cart from "../../Assets/Basic/icon-cart.svg";
import icon_adm from "../../Assets/Basic/icon-adm.svg";


export default function Header() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("");
  const sampleLocation = useLocation();
  const { productsCart } = useContext(CartContext);
  const [classOn, setClassOn] = useState(false);

  let itensCart = productsCart.length

  function openModal() {
    const modal = document.querySelector(".modal");
    modal.showModal();
  }
  function closeModal() {
    const modal = document.querySelector(".modal");
    modal.close();
  }
  function scroll(id) {
    document.getElementById(id).scrollIntoView();
  }

  useEffect(() => {
    if (sampleLocation.pathname.includes("chooseyourgame") || sampleLocation.pathname.includes("aboutyourgame")) {
      setColor("white");
    } else {
      setColor("pink");
    }
  }, [sampleLocation]);


  function route() {
    if (user == "adm" && password == "1234") {
      return "/adm";
    } else {
      return "/accessrestricted";
    }
  }

  return (
    <header>
      <div className={classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
        <div className="menu-header">
          <Link to={"/"}>
            <div className="logo-header">
              <img id={color} src={logo_header} alt="Logo Game Night Home" />
            </div>
          </Link>
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <nav>
            <ul>
              <Link to={"/"}>
                <li onClick={() => scroll("page-1")}>HOME</li>
              </Link>
              <HashLink to={"/#top10"}>
                <li>TOP 10</li>
              </HashLink>
              <HashLink to={"/#categories"}>
                <li>CATEGORIAS</li>
              </HashLink>
              <Link to={"/allgames"}>
                <li>TODOS JOGOS</li>
              </Link>
              <Link to={"/about"}>
                <li>SOBRE NÓS</li>
              </Link>
            </ul>
          </nav>
          <div className="icons-header">
            <div className="icon-cart-item">
              <Link to={"/cart"}>
                <img
                  id={color}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="icon_cart"
                  src={icon_cart}
                  alt="icon_cart"
                />
                {(productsCart.length > 0) ?
                  <div className="icon-item">{itensCart}</div>
                  : <div></div>}
              </Link>
            </div>
          </div>
          <img
            id={color}
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="icon_adm open-modal"
            onClick={openModal}
            src={icon_adm}
            alt="icon_adm"
          />
          <dialog className="modal">
            <h2 className="modal-title">ÁREA RESTRITA</h2>
            <form className="login-form" method="dialog">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="EMAIL"
                required
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="SENHA"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Link to={route()}>
                <button className="form-button" onClick={closeModal}>
                  ENTRAR
                </button>
              </Link>
            </form>
          </dialog>
        </div>
      </div>
    </header>
  );
}
