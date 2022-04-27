export default async function getProducts(setProducts) {

    try {
      const products = await fetch('http://gamenight-backend.herokuapp.com/products')
        .then((response) => response.json());
      setProducts(products.slice(0,10));
    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
  }
