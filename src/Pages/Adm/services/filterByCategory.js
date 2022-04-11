export default async function filterByCategory(id,setProducts) {
    try {
      const products = await fetch("http://localhost:8080/products/category/" + id)
        .then((response) => response.json());
      setProducts(products);
    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
  }