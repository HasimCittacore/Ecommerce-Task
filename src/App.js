import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
export default function App() {

  // Creating a state variable cartCount to
          // maintain and change the state of the cart item
  const [cartCount, setCartCount] = useState(0);
  return (
    
    <div>
      <Navbar cartCount={cartCount} setCartCount={setCartCount} />
      <Header cartCount={cartCount} />
      <Section cartCount={cartCount} setCartCount={setCartCount} />
      <Footer />
    </div>
  );
}
