
import { useEffect, useState} from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import getProducts from "../../Services/getProducts";
import getCategories from "../../Services/getCategories";
import deleteProduct from "../../Services/deleteProduct";
import filterByCategory from "../../Services/filterByCategory";
import filterByPrice from "../../Services/filterByPrice";
import saveProduct from "../../Services/saveProduct";
import updateProduct from "../../Services/updateProduct";

import "./adm.css";

export default function Adm() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [minimumAge, setMinimumAge] = useState("");
  const [maximumPlayersNumber, setMaximumPlayersNumber] = useState("");
  const [minimumPlayersNumber, setMinimumPlayersNumber] = useState("");
  const [language, setLanguage] = useState("");
  const [playingTime, setPlayingTime] = useState("");
  const [category_id, setCategoryId] = useState("");

  const [category,setCategory] = useState({});

  const [category_id_filter, setCategoryIdFilter] = useState("");
  const [max_price, setMaxPrice] = useState("");

  useEffect(() => {
    getProducts(setProducts, clearStates);
    getCategories(setCategories);
  }, []);


  function fillStates(produtc) {
    setTitle(produtc.title);
    setDescription(produtc.description);
    setPrice(produtc.price);
    setImage(produtc.image);
    setMinimumAge(produtc.minimumAge);
    setMaximumPlayersNumber(produtc.maximumPlayersNumber)
    setMinimumPlayersNumber(produtc.minimumPlayersNumber);
    setLanguage(produtc.language);
    setPlayingTime(produtc.playingTime);
    setCategoryId(produtc.category_id);
    setId(produtc.id);
  }

  function clearStates() {
    setId("");
    setTitle("");
    setDescription("");
    setPrice("");
    setImage("");
    setMinimumAge("");
    setMaximumPlayersNumber("");
    setMinimumPlayersNumber("");
    setLanguage("");
    setPlayingTime("");
    setCategoryId("");
    setCategoryIdFilter("");
    setMaxPrice("");
  }

  async function newProduct(event) {
    event.preventDefault();
    if (!title || !category_id || !price) {
      alert("Preencha todos os campos");
    } else {
      const body = {
        "title": title,
        "price": price,
        "description": description,
        "image": image,
        "minimumAge": minimumAge,
        "maximumPlayersNumber": maximumPlayersNumber,
        "minimumPlayersNumber": minimumPlayersNumber,
        "language": language,
        "playingTime": playingTime,
        "category_id": category_id
      };
      saveProduct(body, getProducts, setProducts, clearStates);
    }
  }

  async function editProduct(event) {
    event.preventDefault();
    if (!title || !category_id || !price) {
      alert("Preencha todos os campos");
    } else {
      const body = {
        "id": id,
        "title": title,
        "price": price,
        "description": description,
        "image": image,
        "minimumAge": minimumAge,
        "maximumPlayersNumber": maximumPlayersNumber,
        "minimumPlayersNumber": minimumPlayersNumber,
        "language": language,
        "playingTime": playingTime,
        "category_id": category_id
      };
      updateProduct(body, getProducts, setProducts, clearStates);
    }
  }



  return (
    <div className="admin_container">
      <div className="admin_header"></div>
      <div className="admin_main">
      <div className="admin_body">
        <form className={id ? "form_edit" : "form_save"} onSubmit={id ? editProduct : newProduct}>
          <h1>{id ? "Edição" : "Cadastro"} de Produtos</h1>
          <div className="inputs">
            <label>
              <span>Título</span>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </label>
            <label>
              <span>Descrição</span>
              <textarea

                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>

            <label>
              <span>Imagem</span>
              <input
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </label>
            <div className="form_div">
              <label>
                <span>Idade Mínima</span>
                <input
                  value={minimumAge}
                  onChange={(event) => setMinimumAge(event.target.value)}
                />
              </label>
              <label>
                <span>Tempo de Partida</span>
                <input
                  value={playingTime}
                  onChange={(event) => setPlayingTime(event.target.value)}
                />
              </label>
            </div>
            <div className="form_div">
              <label>
                <span>Mínimo Jogadores</span>
                <input
                  value={minimumPlayersNumber}
                  onChange={(event) => setMinimumPlayersNumber(event.target.value)}
                />
              </label>
              <label>
                <span>Máximo Jogadores</span>
                <input
                  value={maximumPlayersNumber}
                  onChange={(event) => setMaximumPlayersNumber(event.target.value)}
                />
              </label>
            </div>
            <div className="form_div">
              <label>
                <span>Idioma</span>
                <input
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                />
              </label>
              <label>
                <span>Preço</span>
                <input
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </label>
            </div>
            <label>
              <span>Categoria</span>
              <select value={category_id} onChange={(event) => setCategoryId(event.target.value)}>
                <option></option>
                {categories.map((category) => (
                  <option value={category.id}>{category.name}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="container-buttons">
            <button type="submit">{!id ? "SALVAR" : "ALTERAR"}</button>
            <button className="clean" type="button" onClick={clearStates}>LIMPAR</button>
          </div>
        </form>


        <div className="admin_products">

          <div className="admin_filter">
            <h1>Filtrar:</h1>
            <label>
              <span>Categoria</span>
              <select value={category_id_filter} onChange={(event) => { setCategoryIdFilter(event.target.value); setMaxPrice(""); filterByCategory(event.target.value, setProducts) }}>
                <option></option>
                {categories.map((category) => (
                  <option value={category.id}>{category.name}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Valor limite</span>
              <select value={max_price} onChange={(event) => { setMaxPrice(event.target.value); setCategoryIdFilter(""); filterByPrice(event.target.value, setProducts) }}>
                <option></option>
                <option value={100}>Até R$100</option>
                <option value={200}>Até R$200</option>
                <option value={300}>Até R$300</option>
                <option value={400}>Até R$400</option>
                <option value={500}>Até R$500</option>
              </select>
            </label>
            <button type="button" onClick={() => getProducts(setProducts, clearStates)}>MOSTRAR TODOS</button>
          </div>               


          <ul className="admin_products_card">
            {products.map((produtc) => 
            (
              <li>
                <img className="admin_products_image" src={produtc.image}></img>
                <div>
                  <h2>{produtc.title}</h2>
                  <p>{produtc.description}</p>
                  <div className="admin_products_info">
                    {categories.filter(category => category.id==produtc.id).map(category => (<p>Category: {category.name}</p>))} 
                    <p>Min-jogadores: {produtc.minimumPlayersNumber}</p>
                    <p>Max-jogadores: {produtc.maximumPlayersNumber}</p>
                    <p>Idade: {produtc.minimumAge}+</p>
                    <p>Idioma: {produtc.language}</p>
                    <p>Tempo: {produtc.playingTime} min</p>
                    <p>Preço: R$ {produtc.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="admin_products_card_buttons">
                  <FiEdit className="icon" size={30} color="#cf4492" onClick={() => fillStates(produtc)} />
                  <FiTrash
                    className="icon"
                    size={30}
                    color="#cf4492"
                    onClick={() => deleteProduct(produtc.id, getProducts, setProducts, clearStates)}
                  />
                </div>
              </li>
            ))}
          </ul> 
        </div>
        </div>
        <div className="admin_footer"></div>
      </div>
    
    </div>
  );
}

