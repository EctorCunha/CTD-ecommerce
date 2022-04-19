export default async function getCategories(setCategories) {

  try {
    const categories = await fetch(" http://18.189.31.114:8080/categories")
      .then((response) => response.json());
    setCategories(categories);
  } catch (error) {
    alert("Houve um erro ao comunicar com o servidor");
  }

}