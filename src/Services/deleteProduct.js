export default async function deleteProduct(id,getProducts,setProducts,clearStates) {
    try {
      await fetch("http://localhost:8080/products/" + id, {
        method: "DELETE",
      });
      alert("Deletado com sucesso");
      getProducts(setProducts,clearStates);
    } catch (error) {
      alert("Erro ao deletar");
    }
  }