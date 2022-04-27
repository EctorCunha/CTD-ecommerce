
  export default async function getProducts(setProducts,clearStates) {

    try {
      const products = await fetch(" http://gamenight-backend.herokuapp.com/products")
        .then((response) => response.json());
      setProducts(products);
    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
    clearStates();
  }