export default async function updateProduct(body,getProducts,setProducts,clearStates) {
    try {
        await fetch(" http://18.189.31.114:8080/products", {
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