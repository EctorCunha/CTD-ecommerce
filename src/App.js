import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Error404 from "./Pages/404";
import About from "./Pages/About";
import Categories from "./Pages/Categories";
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
