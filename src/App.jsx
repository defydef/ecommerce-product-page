import { useState } from "react";
import Gallery from "./ui/Gallery";
import Navbar from "./ui/Navbar";
import Product from "./ui/Product";
import Main from "./ui/Main";
import MobileMenu from "./ui/MobileMenu";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <Main>
      {showMobileMenu && (
        <MobileMenu
          onToggleMobileMenu={setShowMobileMenu}
          isShowMobileMenu={showMobileMenu}
        />
      )}
      <Navbar
        onToggleMobileMenu={setShowMobileMenu}
        isShowMobileMenu={showMobileMenu}
        onToggleCart={setShowCart}
        isShowCart={showCart}
      />
      <Gallery isShowCart={showCart} />
      <Product />
    </Main>
  );
}

export default App;
