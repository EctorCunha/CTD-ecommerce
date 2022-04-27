export default async function updateProduct(body,getProducts,setProducts,clearStates) {
    try {
        await fetch(" http://gamenight-backend.herokuapp.com/products", {
          method: "PUT",
          body: JSON.stringify(body),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        alert("Produto atualizado com sucesso");
        getProducts(setProducts,clearStates);
      } catch (error) {
        alert("Erro ao alterar");
      }
}