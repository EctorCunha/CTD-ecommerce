export default async function getCategoryById(id,setCategory) {

    try {
      const category = await fetch(" https://gamenight-backend.herokuapp.com/categories/"+id)
        .then((response) => response.json());
      setCategory(category);
    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
  
  }