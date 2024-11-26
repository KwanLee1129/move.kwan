// script.js

// Cart data object to store menu items
// 장바구니 데이터를 저장할 객체
const cart = {};

// DOM element references
// HTML 요소 참조
const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');

/**
 * Add menu item to cart
 * 장바구니에 메뉴 추가하는 함수
 * @param {string} menuName - Name of the menu item (메뉴 이름)
 * @param {number} price - Price of the menu item (메뉴 가격)
 */
function addToCart(menuName, price) {
    if (cart[menuName]) {
        cart[menuName].quantity++; // Increase quantity if item exists
    } else {
        cart[menuName] = {
            price: price,
            quantity: 1
        }; // Add new item if it doesn't exist
    }
    updateCartDisplay(); // Update cart display
}

/**
 * Update item quantity in cart
 * 수량 변경 함수
 * @param {string} menuName - Name of the menu item (메뉴 이름)
 * @param {number} change - Amount to change (+1 or -1) (변경할 수량)
 */
function updateQuantity(menuName, change) {
    cart[menuName].quantity += change;
    if (cart[menuName].quantity <= 0) {
        delete cart[menuName]; // Remove item if quantity is 0 or less
    }
    updateCartDisplay(); // Update cart display
}

/**
 * Update cart display on screen
 * 장바구니 화면 업데이트 함수
 */
function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;

    // Loop through each item in cart
    for (const menuName in cart) {
        const item = cart[menuName];
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        // Create cart item element
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
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
        cartItems.appendChild(cartItem);
    }

    // Update total display
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}