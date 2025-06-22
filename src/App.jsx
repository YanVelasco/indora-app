// import { Home } from "./components/home/Home";
// import {Products} from "./components/products/Products";
// import { NavBar } from "./components/shared/NavBar";
// import { About } from "./components/about/About";
// import { Contact } from "./components/contact/Contact";
// import Home from "./components/home/Home";
// import Products from "./components/products/Products";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import About from "./components/about/About";
import ProductCart from "./components/shared/ProductCart";
import VLibras from "./components/vlibras/VLibras";

function App() {
  return (
    <div className="bg-black min-h-screen text-white pt-34">
      <Router>
        <NavBar />
        <VLibras />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/shared" element={<ProductCart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
