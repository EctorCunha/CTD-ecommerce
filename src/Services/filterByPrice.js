export default async function filterByPrice(max_price,setProducts) {
    try {
      const products = await fetch(" https://gamenight-backend.herokuapp.com/products/price/0.0/" + max_price)
        .then((response) => response.json());
      setProducts(products);
    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
  }