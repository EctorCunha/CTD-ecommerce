import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Error404 from "./Pages/Error404";
import About from "./Pages/About";
import AboutYourGame from "./Pages/AboutYourGame";
import Adm from "./Pages/Adm";
import Categories from "./Pages/Categories";
import Cart from "./Pages/Cart"; 
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/aboutyourgame" element={<AboutYourGame/>} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/adm" element={<Adm />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
