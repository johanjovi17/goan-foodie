import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Menu from "./pages/menu/Menu";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/recommend" element={<Recommend />} /> */}
      </Routes>
    </>
  );
}

export default App;
