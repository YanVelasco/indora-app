import { Home } from "./components/home/Home";
import Products from "./components/products/Products";
// import { NavBar } from "./components/shared/NavBar";
// import { About } from "./components/about/About";
// import { Contact } from "./components/contact/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./components/home/Home";
// import Products from "./components/products/Products";

import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import About from "./components/about/About";
// import ProductCart from "./components/shared/ProductCart";
import Cart from "./components/shared/Cart";
import VLibras from "./components/vlibras/VLibras";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="bg-black min-h-screen text-white pt-34">
      <Router>
        <NavBar />
        <VLibras />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/shared" element={<ProductCart />} /> */}
          <Route path="/shared" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
