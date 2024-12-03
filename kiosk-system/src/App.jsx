import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import MenuList from "./components/menu/MenuList";
import CartList from "./components/cart/CartList";
import PaymentMethod from "./components/payment/PaymentMethod";

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
              <div className="max-w-5xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-8">키오스크</h1>
                <div className="grid grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <MenuList />
                  </div>
                  <div className="space-y-6">
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
