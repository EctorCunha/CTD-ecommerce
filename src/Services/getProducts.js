
  export default async function getProducts(setProducts,clearStates) {

    try {
      const products = await fetch("http://localhost:8080/products")
        .then((response) => response.json());
      setProducts(products);

    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
    clearStates();

  }