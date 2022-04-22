export default async function getCategoryById(id,setCategory) {

    try {
      const category = await fetch("http://localhost:8080/categories/"+id)
        .then((response) => response.json());
      setCategory(category);
    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
  
  }