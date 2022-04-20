import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);

  function addProducToCart(id, title, minimumAge, language, price, image ) {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.filter((product) => product.id === id);

    if (item.length > 0) {
      item[0].qtd = item[0].qtd + 1;
    } else {
      copyProductsCart.push({ id: id, title: title, age: minimumAge, language: language, price: price, image: image, qtd: 1});
    }

    setProductsCart(copyProductsCart);

    localStorage.setItem("@game_night", JSON.stringify(copyProductsCart));

  }
  
  useEffect(() => {
    const productsStorage = localStorage.getItem("@game_night");

    if (productsStorage) {
      const tempProducts = JSON.parse(productsStorage);
      setProductsCart(tempProducts);
    }
  }, []);

  function removeProductsCart(id){
    const copyProductsCart = [...productsCart];
    
    const item = copyProductsCart.filter((product) => product.id === id);
    
    if(item.length > 0) {
      if (item[0].qtd > 1) {
        item[0].qtd = item[0].qtd - 1;
        setProductsCart(copyProductsCart);
      } } else{
      alert("Produto não encontrado")
    }
  }

  function deleteProductsCart(id){
    const copyProductsCart = [...productsCart];
    
    const item = copyProductsCart.filter((product) => product.id === id);
    const arrayFilter = copyProductsCart.filter((product) => product.id !== id);

    if(item.length > 0) {
    if (item[0].qtd > 1) {
      item[0].qtd = item[0].qtd - 1;
    } else {
      setProductsCart(arrayFilter);
    }} else{
      alert("Produto não encontrado")
    }
    setProductsCart(arrayFilter);

    localStorage.setItem("@game_night", JSON.stringify(arrayFilter));

  }

  function cleanList(){
      localStorage.clear();
  }

  return (
    <CartContext.Provider value={{ productsCart, addProducToCart, removeProductsCart, deleteProductsCart, cleanList}}>
      {children}
    </CartContext.Provider>
  );
}
