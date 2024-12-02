// script.js

/**
* 장바구니 데이터를 저장하는 객체
* Object to store cart data
* 각 메뉴의 이름을 키로 하고, 가격과 수량을 값으로 가지는 객체
* Object with menu names as keys, containing price and quantity as values
*/
const cart = {};

/**
* HTML에서 자주 사용할 요소들을 변수에 저장
* Store frequently used HTML elements in variables
* getElementById: HTML에서 해당 id를 가진 요소를 찾아 반환
* getElementById: Returns the element with specified id from HTML
*/
const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');

/**
* 메뉴 순서를 정의하는 배열
* Array defining menu order
* 장바구니에 표시될 때 이 순서를 따름
* Cart items will be displayed in this order
*/
const menuOrder = ['Americano', 'Flat white(5oz)'];

/**
* 장바구니에 메뉴를 추가하는 함수
* Function to add menu item to cart
* @param {string} menuName - 메뉴 이름 / Menu name
* @param {number} price - 메뉴 가격 / Menu price
*/
function addToCart(menuName, price) {
   // cart 객체에 해당 메뉴가 이미 있는지 확인
   // Check if the menu item already exists in cart
  if (cart[menuName]) {
       // 있다면 수량만 증가
       // If exists, increase quantity
      cart[menuName].quantity++;
  } else {
       // 없다면 새로운 객체를 생성하여 추가
       // If not, create new object and add to cart
      cart[menuName] = {
           price: price,    // 가격 저장 / Store price
           quantity: 1      // 초기 수량 1로 설정 / Set initial quantity to 1
      };
  }
   // 장바구니 화면 업데이트
   // Update cart display
  updateCartDisplay();
}

/**
* 메뉴의 수량을 변경하는 함수
* Function to update item quantity
* @param {string} menuName - 메뉴 이름 / Menu name
* @param {number} change - 변경할 수량 (+1 또는 -1) / Quantity change amount
*/
function updateQuantity(menuName, change) {
   // 현재 수량에 변경값을 더함
   // Add change amount to current quantity
  cart[menuName].quantity += change;
   // 수량이 0 이하가 되면 메뉴 삭제
   // If quantity becomes 0 or less, remove menu item
  if (cart[menuName].quantity <= 0) {
       // delete: 객체의 속성을 제거하는 연산자
       // delete: Operator that removes object property
      delete cart[menuName];
  }
   // 장바구니 화면 업데이트
   // Update cart display
  updateCartDisplay();
}

/**
* 장바구니 화면을 업데이트하는 함수
* Function to update cart display
* 메뉴 순서를 유지하면서 장바구니 내용과 총액을 표시
* Displays cart contents and total while maintaining menu order
*/
function updateCartDisplay() {
   // 장바구니 HTML 초기화
   // Clear cart HTML
  cartItems.innerHTML = '';
   let total = 0;  // 총액 초기화 / Initialize total

   // 미리 정의된 메뉴 순서대로 장바구니 아이템 표시
   // Display cart items according to predefined menu order
  menuOrder.forEach(menuName => {
       // 해당 메뉴가 장바구니에 있는 경우에만 처리
       // Process only if the menu exists in cart
      if (cart[menuName]) {
          const item = cart[menuName];
           // 해당 메뉴의 총 가격 계산 (가격 * 수량)
           // Calculate total price for this item (price * quantity)
           const itemTotal = item.price * item.quantity;
           // 전체 총액에 추가
           // Add to total amount
          total += itemTotal;

           // 장바구니 아이템의 HTML 요소 생성
           // Create HTML element for cart item
          const cartItem = document.createElement('div');
          cartItem.className = 'cart-item';
           // 템플릿 리터럴을 사용하여 HTML 내용 생성
           // Create HTML content using template literal
          cartItem.innerHTML = `
              <span class="menu-name">${menuName}</span>
              <div class="controls-container">
                  <button onclick="updateQuantity('${menuName}', -1)">-</button>
                  <div class="quantity-box">
                      <span>${item.quantity}</span>
                  </div>
                  <button onclick="updateQuantity('${menuName}', 1)">+</button>
                  <div class="price-box">
                      <span>$${itemTotal.toFixed(2)}</span>
                  </div>
              </div>
          `;
           // 생성한 아이템을 장바구니에 추가
           // Add created item to cart
          cartItems.appendChild(cartItem);
      }
  });

   // 총액 표시 업데이트
   // Update total display
   // toFixed(2): 소수점 둘째자리까지 표시
   // toFixed(2): Display up to 2 decimal places
  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}