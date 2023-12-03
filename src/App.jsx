import { useState } from "react";
import Gallery from "./ui/Gallery";
import Navbar from "./ui/Navbar";
import Product from "./ui/Product";
import Main from "./ui/Main";
import MobileMenu from "./ui/MobileMenu";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Main>
      <MobileMenu />
      <Navbar />
      <Gallery />
      <Product />
    </Main>
  );
}

export default App;
