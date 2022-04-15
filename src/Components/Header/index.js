import { Link } from "react-router-dom";
import "./header.css";
import logo_header from "../../Assets/Header/logo-header.png";
import icon_cart from "../../Assets/Basic/icon-cart.svg";
import icon_adm from "../../Assets/Basic/icon-adm.svg";

export default function Header() {
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

  return (
    <header>
      <Link to={"/"}>
        <div className="logo-header">
          <img src={logo_header} alt="Logo Game Night Home" />
        </div>
      </Link>
      <div className="menu-header">
        <nav>
          <ul>
            <Link to={"/"}>
              <li onClick={() => scroll("page-1")}>HOME</li>
            </Link>
            <span>|</span>
            <Link to={"/"}>
              <li onClick={() => scroll("top10")}>TOP 10</li>
            </Link>
            <span>|</span>
            <Link to={"/"}>
              <li onClick={() => scroll("page-category")}>CATEGORIAS</li>
            </Link>
            <span>|</span>
            <Link to={"/about"}>
              <li>SOBRE NÓS</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="icons-header">
        <Link to={"/cart"}>
          <img
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="icon_cart"
            src={icon_cart}
            alt="icon_cart"
          />
        </Link>
        <img
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
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="SENHA"
              required
            />
            <Link to={"/adm"}>
              <button className="form-button" onClick={closeModal}>
                ENTRAR
              </button>
            </Link>
          </form>
        </dialog>
      </div>
    </header>
  );
}
