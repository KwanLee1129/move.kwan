// 필요한 컴포넌트와 컨텍스트 import
// Import required components and context
import { CartProvider } from "./context/CartContext";
import MenuList from "./components/menu/MenuList";
import CartList from "./components/cart/CartList";
import PaymentMethod from "./components/payment/PaymentMethod";

export default function App() {
  // 결제 수단 선택 핸들러
  // Payment method selection handler
  const handlePaymentSelect = (method) => {
    console.log(`선택된 결제 수단: ${method}`);
    // 추후 결제 처리 로직 추가 예정
    // Payment processing logic to be added later
  };

  return (
    // CartProvider로 전체 앱을 감싸서 장바구니 상태 공유
    // Wrap entire app with CartProvider to share cart state
    <CartProvider>
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">키오스크</h1>
        {/* 2:1 비율의 그리드 레이아웃 (메뉴:장바구니) */}
        {/* 2:1 grid layout (menu:cart) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  );
}
