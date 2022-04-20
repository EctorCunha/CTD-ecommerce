import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import getProductsTop10 from "../../Services/getProductsTop10";
import "./top10.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import icone_jogadores from "../../Assets/Basic/icon-players.svg";
import icone_tempo from "../../Assets/Basic/icon-clock.svg"
import icone_age from "../../Assets/Basic/icon-age.svg"

export default function Top10() {

  const [top10, setTop10] = useState([]);

  useEffect(() => {
    getProductsTop10(setTop10);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1300, min: 1070 },
      items: 4
    },
    tablet2: {
      breakpoint: { max: 1070, min: 830 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 830, min: 600 },
      items: 2
    },
    mobile2: {
      breakpoint: { max: 580, min: 0 },
      items: 1
    }
  };


  return (
    <section className="top10" id="top10">
      <div className="transition2"></div>
      <div className="container-top10">
        <h1 className="title-top10">TOP 10</h1>
        <h1 className="subtitle-top10">OS MELHORES DE CADA CATEGORIA</h1>

        <Carousel responsive={responsive}>
          {top10.map((product) =>
          (
            <Link to={'/aboutyourgame/' + product.id}>
              <div className="top10_card">
                <img src={product.image} alt='imagem'></img>
                <h2>{product.title}</h2>
                <div className="product_infos">
                  <div className="product_info">
                    <img src={icone_jogadores} alt='icone'></img>
                    <p>{product.minimumPlayersNumber} - {product.maximumPlayersNumber}</p>
                  </div>
                  <div className="product_info">
                    <img src={icone_tempo} alt='icone'></img>
                    <p>{product.playingTime} min</p>
                  </div>
                  <div className="product_info">
                    <img src={icone_age} alt='icone'></img>
                    <p>{product.minimumAge} anos</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
      <div className="transition1"></div>
    </section>
  );
}