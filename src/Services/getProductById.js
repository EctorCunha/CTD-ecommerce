export default async function getProductById(id, setProduct) {

    try {
        const product = await fetch(" http://18.189.31.114:8080/products/" + id)
            .then((response) => response.json());
        setProduct(product);
    } catch (error) {
        alert("Houve um erro ao comunicar com o servidor");
    }

}