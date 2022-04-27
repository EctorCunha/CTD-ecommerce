export default async function getProductById(id, setProduct) {

    try {
        const product = await fetch(" http://gamenight-backend.herokuapp.com/products/" + id)
            .then((response) => response.json());
        setProduct(product);
    } catch (error) {
        alert("Houve um erro ao comunicar com o servidor");
    }

}