import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import VideoBanner from "./Components/Banner";
import WhoWeAre from "./Components/WhoWeAre";
import Carousel from "./Components/Carousel";
import Products from "./Components/Products";
import ProductCard from "./Components/Card";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import { Home } from "./Pages/Home";
import ProductDetail from "./Components/ProductDetail";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/absSupplies " element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<VideoBanner />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        {/* <div className="App">
          
          <VideoBanner />
          <WhoWeAre />
          <Carousel />
          <ProductCard />
        </div> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
