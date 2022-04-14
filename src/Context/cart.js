import { createContext, useState } from "react";

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
  }

  function removeProductsCart(id){
    const copyProductsCart = [...productsCart];
    const item = copyProductsCart.filter((product) => product.id === id);

    if(item.length > 0) {

    if (item[0].qtd > 1) {
      item[0].qtd = item[0].qtd - 1;
    } else {
      const arrayFilter = copyProductsCart.filter((product) => product.id !== id);
      setProductsCart(arrayFilter);
    }} else{
      alert("Produto não encontrado")
    }
  }

  return (
    <CartContext.Provider value={{ productsCart, addProducToCart, removeProductsCart }}>
      {children}
    </CartContext.Provider>
  );
}
