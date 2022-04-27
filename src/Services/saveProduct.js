export default async function saveProduct(body,getProducts,setProducts,clearStates) {
    try {
        await fetch(" https://gamenight-backend.herokuapp.com/products", {
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