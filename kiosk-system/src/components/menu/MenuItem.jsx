import { useCart } from "../../context/CartContext";

export default function MenuItem({ id, name, price }) {
  // 장바구니 컨텍스트에서 addToCart 함수 가져오기
  // Get addToCart function from cart context
  const { addToCart } = useCart();

  return (
    // 메뉴 아이템 카드
    // Menu item card
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      {/* 메뉴 이름 */}
      {/* Menu name */}
      <h3 className="font-medium">{name}</h3>
      {/* 가격 정보 */}
      {/* Price information */}
      <p className="text-gray-600">{price}원</p>
      {/* 장바구니 담기 버튼 */}
      {/* Add to cart button */}
      <button
        onClick={() => addToCart({ id, name, price })}
        className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        담기
      </button>
    </div>
  );
}
