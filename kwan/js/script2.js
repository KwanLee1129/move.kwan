// 장바구니 데이터 구조 수정 (옵션 정보 포함)
const cart = {};

// DOM 요소 참조
const menuContainer = document.querySelector("#menu");
const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');

// 옵션 버튼 클릭 이벤트 처리
document.querySelectorAll('.option-btn, .option-btn2').forEach(button => {
    button.addEventListener('click', function() {
        // 같은 메뉴의 모든 옵션 버튼 찾기 (두 클래스 모두)
        const parentDiv = this.closest('.option-buttons');
        const allOptionButtons = parentDiv.querySelectorAll('.option-btn, .option-btn2');
        
        // 모든 버튼의 active 클래스 제거
        allOptionButtons.forEach(btn => btn.classList.remove('active'));
        
        // 클릭한 버튼에 active 클래스 추가
        this.classList.add('active');
    });
});

// 장바구니 담기 기능
menuContainer.addEventListener('click', (event) => {
    // 클릭된 요소가 add-btn 클래스를 가지고 있는지 확인
    if (event.target.classList.contains('add-btn')) {
        // 메뉴 정보 가져오기
        const menuCard = event.target.closest('.menu-card');
        const menuName = menuCard.querySelector('h3').textContent;
        const price = parseFloat(event.target.dataset.price);
        
        // 선택된 옵션 가져오기
        const selectedOption = menuCard.querySelector('.option-btn.active, .option-btn2.active');
        if (!selectedOption) {
            alert('옵션을 선택해주세요!');
            return;
        }
        
        const optionType = selectedOption.dataset.option;
        
        // 장바구니 키 생성 (메뉴이름-옵션)
        const cartKey = `${menuName}-${optionType}`;
        
        // 장바구니에 추가 또는 수량 증가
        if (cart[cartKey]) {
            cart[cartKey].quantity++;
        } else {
            cart[cartKey] = {
                name: menuName,
                price: price,
                option: optionType,
                quantity: 1
            };
        }
        
        updateCartDisplay();
    }
});

// 장바구니 업데이트 함수 수정
function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;

    for (const key in cart) {
        const item = cart[key];
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>${item.name}</div>
            <div>${item.option}</div>
            <div>${item.quantity}</div>
            <div>$${itemTotal.toFixed(2)}</div>
            <button class="delete-btn" onclick="deleteItem('${key}')">×</button>
        `;
        cartItems.appendChild(cartItem);
    }

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;

    // 부드러운 스크롤 추가
    setTimeout(() => {
        totalDisplay.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'end' 
        });
    }, 100);  // DOM 업데이트 후 스크롤하기 위해 약간의 지연 추가
}

// 삭제 버튼용 함수 추가
function deleteItem(key) {
    delete cart[key];
    updateCartDisplay();
}

// 수량 변경 함수
function updateQuantity(key, change) {
    cart[key].quantity += change;
    if (cart[key].quantity <= 0) {
        delete cart[key];
    }
    updateCartDisplay();
}