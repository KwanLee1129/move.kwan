import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

export default function CartList() {
  // 장바구니 컨텍스트에서 아이템 목록 가져오기
  // Get cart items from cart context
  const { cartItems } = useCart();

  // 총 금액 계산
  // Calculate total amount
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    // 장바구니 컨테이너
    // Cart container
    <div className="border rounded-lg p-4 bg-white">
      <h2 className="text-xl font-medium mb-4">장바구니</h2>
      {/* 장바구니가 비어있는 경우 메시지 표시 */}
      {/* Display message when cart is empty */}
      {cartItems.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        // 장바구니 아이템 목록과 총액 표시
        // Display cart items list and total amount
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          {/* 총액 표시 영역 */}
          {/* Total amount display area */}
          <div className="pt-4 border-t">
            <p className="text-right font-medium">총 금액: {total}원</p>
          </div>
        </div>
      )}
    </div>
  );
}
