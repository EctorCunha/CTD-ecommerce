import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from './Pages/Home';
import Top10 from "./Components/Top10";
import Categories from "./Components/Categories";
import AboutYourGame from "./Pages/AboutYourGame";
import AccessRestricted from "./Pages/AccessRestricted";
import About from "./Pages/About";
import Adm from "./Pages/Adm";
import AllGames from "./Pages/AllGames"; 
import Cart from "./Pages/Cart";
import CartFinish from "./Pages/CartFinish";
import CartProvider from "./Context/cart";
import ChooseYourGame from "./Pages/ChooseYourGame";
import Error404 from "./Pages/Error404";

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#top10" element={<Top10 />} />
          <Route path="/#categories" element={<Categories />} />
          <Route path="/chooseyourgame/:code" element={<ChooseYourGame/>} />
          <Route path="/aboutyourgame/:code" element={<AboutYourGame/>} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/finish" element={<CartFinish />} />
          <Route path="/adm" element={<Adm />} />
          <Route path="/accessrestricted" element={<AccessRestricted />} />
          <Route path="/allgames" element={<AllGames />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
       </CartProvider>
    </div>
  );
}

export default App;
