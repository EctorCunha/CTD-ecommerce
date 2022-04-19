export default async function deleteProduct(id,getProducts,setProducts,clearStates) {
    try {
      await fetch("http://18.189.31.114:8080/products/" + id, {
        method: "DELETE",
      });
      alert("Produto deletado com sucesso");
      getProducts(setProducts,clearStates);
    } catch (error) {
      alert("Erro ao deletar");
    }
  }