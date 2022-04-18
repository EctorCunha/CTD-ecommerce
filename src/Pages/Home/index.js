import { useEffect, useState } from "react";
import logoHome from "../../Assets/Basic/logo-gamenight.svg";
import Categories from "../../Components/Categories";
import Top10 from "../../Components/Top10";
import data from "../../Assets/Home/data"
import "./home.css";

export default function Home() {

  let i = 0;
  const [add, setAdds] = useState(data[i]);

  useEffect(() => {
    setInterval(() => {
      timing();
      setAdds(data[i]);
    }, 3000);
  }, [i])

  function timing() {
    if (i < 8) {
      return i++;
    } else {
      return i = 0;
    }
  }

  return (
    <main className="page-1" id="page-1">
      <section className="body-1">
        <div className="header_home"></div>
        <div className="body-1-main">
          <img className="logoHome" src={logoHome} alt="logo home" />
          <div className="imgHome" alt="imagem home">
            <div className="imgHome_effect">
              <p className="changing_text">{add.title}</p>
            </div>
          </div>
        </div>
        <div className="transition1"></div>
      </section>

      <Top10 />
      <Categories />

    </main>
  );
}
