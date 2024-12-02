import { useCart } from "../../context/CartContext";

export default function CartItem({ id, name, price, quantity }) {
  // 장바구니 컨텍스트에서 수량 업데이트와 제거 함수 가져오기
  // Get quantity update and remove functions from cart context
  const { updateQuantity, removeFromCart } = useCart();

  return (
    // 장바구니 아이템 컨테이너
    // Cart item container
    <div className="flex justify-between items-center">
      {/* 상품 정보 영역 */}
      {/* Product information area */}
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-600">{price}원</p>
      </div>
      {/* 수량 조절 및 삭제 버튼 영역 */}
      {/* Quantity control and delete button area */}
      <div className="flex items-center space-x-2">
        {/* 수량 감소 버튼 */}
        {/* Decrease quantity button */}
        <button
          onClick={() => updateQuantity(id, Math.max(1, quantity - 1))}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          -
        </button>
        {/* 현재 수량 표시 */}
        {/* Current quantity display */}
        <span>{quantity}</span>
        {/* 수량 증가 버튼 */}
        {/* Increase quantity button */}
        <button
          onClick={() => updateQuantity(id, quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
        {/* 삭제 버튼 */}
        {/* Delete button */}
        <button
          onClick={() => removeFromCart(id)}
          className="ml-2 text-red-500"
        >
          삭제
        </button>
      </div>
    </div>
  );
}
