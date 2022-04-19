export default async function getCategoryById(id,setCategory) {

    try {
      const category = await fetch(" http://18.189.31.114:8080/categories/"+id)
        .then((response) => response.json());
      setCategory(category);
    } catch (error) {
      alert("Houve um erro ao comunicar com o servidor");
    }
  
  }