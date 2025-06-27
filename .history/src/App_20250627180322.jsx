import { Home } from "./components/home/Home";
import Products from "./components/products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import Footer from "./components/shared/Footer";
import About from "./components/about/About";
import Cart from "./components/shared/Cart";
import VLibras from "./components/vlibras/VLibras";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ContatoForm from "./components/contact/ContatoForm";

import Termos from './components/terms/Terms';
import Politicas from './components/politics/Politicas';
import Dora from './components/dora/Dora';
import DoraFloat from './components/dora/DoraFloat';
import Ofertas from './components/ofertas/Ofertas';


function App() {
  return (
    <div className="bg-black min-h-screen text-white pt-34">
      <Router>
        <NavBar />
        {/* <VLibras /> */}
        <DoraFloat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shared" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContatoForm />} />
          <Route path="/terms" element={<Termos />} />
          <Route path="/politics" element={<Politicas />} />
          <Route path="/dora" element={<Dora />} />
          <Route path="/ofertas" element={<Ofertas />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
