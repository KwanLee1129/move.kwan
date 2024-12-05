import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import MenuList from "./components/menu/MenuList";
import CartList from "./components/cart/CartList";
import PaymentMethod from "./components/payment/PaymentMethod";
import "./App.css";

export default function App() {
  const handlePaymentSelect = (method) => {
    console.log(`선택된 결제 수단: ${method}`);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CartProvider>
              <div className="kiosk-container">
                <h1 className="kiosk-title">키오스크</h1>
                <div className="kiosk-layout">
                  <div className="menu-section">
                    <MenuList />
                  </div>
                  <div className="cart-section">
                    <CartList />
                    <PaymentMethod onSelect={handlePaymentSelect} />
                  </div>
                </div>
              </div>
            </CartProvider>
          }
        />
      </Routes>
    </Router>
  );
}
