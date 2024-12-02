import { createContext, useState, useContext } from "react";

// 장바구니 컨텍스트 생성
// Create cart context
const CartContext = createContext();

export function CartProvider({ children }) {
  // 장바구니 아이템 상태 관리
  // Manage cart items state
  const [cartItems, setCartItems] = useState([]);

  // 장바구니에 아이템 추가
  // Add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
  };

  // 장바구니에서 아이템 제거
  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // 아이템 수량 업데이트
  // Update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Context Provider를 통해 상태와 함수들을 하위 컴포넌트에 제공
  // Provide state and functions to child components through Context Provider
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 커스텀 훅: 장바구니 컨텍스트 사용을 위한 헬퍼 함수
// Custom hook: Helper function to use cart context
export function useCart() {
  return useContext(CartContext);
}
