export default async function getCategories(setCategories) {

  try {
    const categories = await fetch(" https://gamenight-backend.herokuapp.com/categories")
      .then((response) => response.json());
    setCategories(categories);
  } catch (error) {
    alert("Houve um erro ao comunicar com o servidor");
  }

}