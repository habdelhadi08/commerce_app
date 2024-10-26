import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Homepage from "./pages/Homepage/index.jsx";
import NavBar from "./components/Nav/index.jsx";
import Women from "./pages/Women/index.jsx";
import Men from "./pages/Men/index.jsx";
import Kids from "./pages/Kids/index.jsx";

export default function App() {
  const [cartCount, setCartCount] = useState(0); // Global cart state

  // Increment cart count
  const incrementCart = () => setCartCount(cartCount + 1);

  return (
    <>
      <div className="App">
        {/* Pass cart count and increment function as props */}
        <NavBar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/Women"
            element={<Women onAddToCart={incrementCart} />}
          />
          <Route path="/Men" element={<Men onAddToCart={incrementCart} />} />
          <Route path="/Kids" element={<Kids onAddToCart={incrementCart} />} />
        </Routes>
      </div>
    </>
  );
}
