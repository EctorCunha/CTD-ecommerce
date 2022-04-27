export default async function deleteProduct(id,getProducts,setProducts,clearStates) {
    try {
      await fetch("http://gamenight-backend.herokuapp.com/products/" + id, {
        method: "DELETE",
      });
      alert("Produto deletado com sucesso");
      getProducts(setProducts,clearStates);
    } catch (error) {
      alert("Erro ao deletar");
    }
  }