import { useState } from "react";
import Gallery from "./ui/Gallery";
import Navbar from "./ui/Navbar";
import Product from "./ui/Product";
import Main from "./ui/Main";
import MobileMenu from "./ui/MobileMenu";
import { CartProvider } from "./contexts/CartContext";
import ProductGallery from "./ui/ProductGallery";
import HorizontalLine from "./ui/HorizontalLine";

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
      <CartProvider>
        <Navbar
          onToggleMobileMenu={setShowMobileMenu}
          isShowMobileMenu={showMobileMenu}
          onToggleCart={setShowCart}
          isShowCart={showCart}
        />
        <HorizontalLine />
        <ProductGallery>
          <Gallery isShowCart={showCart} />
          <Product />
        </ProductGallery>
      </CartProvider>
    </Main>
  );
}

export default App;
