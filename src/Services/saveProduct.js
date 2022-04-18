export default async function saveProduct(body,getProducts,setProducts,clearStates) {
    try {
        await fetch(" http://18.191.177.168:8080/products", {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        alert("Produto cadastrado com sucesso");
        getProducts(setProducts,clearStates);
      } catch (error) {
        alert("Erro ao cadastrar Produto");
      }
}