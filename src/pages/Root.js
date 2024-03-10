import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import { useState } from "react";
import CartProvider from "../store/CartProvider";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Layout/Footer";

function RootLayout() {


  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  
  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      </CartProvider>
  );
}

export default RootLayout;
