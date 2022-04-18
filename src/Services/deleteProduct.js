export default async function deleteProduct(id,getProducts,setProducts,clearStates) {
    try {
      await fetch("http://18.191.177.168:8080/" + id, {
        method: "DELETE",
      });
      alert("Produto deletado com sucesso");
      getProducts(setProducts,clearStates);
    } catch (error) {
      alert("Erro ao deletar");
    }
  }