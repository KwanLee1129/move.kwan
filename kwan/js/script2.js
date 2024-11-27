// 장바구니 데이터를 저장할 객체
// Object to store shopping cart data
const cart = {};

// DOM 요소 참조
// Reference DOM elements
const menuContainer = document.querySelector("#menu"); // 메뉴 전체 컨테이너 참조 / Reference to the entire menu container
const cartItems = document.getElementById('cart-items'); // 장바구니 아이템이 표시되는 영역 / Area where cart items are displayed
const totalDisplay = document.getElementById('total'); // 총 가격이 표시되는 영역 / Area where the total price is displayed

// 옵션 버튼 클릭 시 동작 처리
// Handle actions when an option button is clicked
document.querySelectorAll('.option-btn, .option-btn2').forEach(button => {
    button.addEventListener('click', function () {
        // 현재 클릭한 버튼이 속한 메뉴 카드 내의 모든 옵션 버튼 찾기
        // Find all option buttons within the menu card of the clicked button
        const parentDiv = this.closest('.option-buttons'); // 옵션 버튼들이 포함된 부모 요소 탐색 / Find the parent element containing option buttons
        const allOptionButtons = parentDiv.querySelectorAll('.option-btn, .option-btn2'); // 모든 옵션 버튼 선택 / Select all option buttons

        // 모든 버튼에서 활성 상태 제거
        // Remove active state from all buttons
        allOptionButtons.forEach(btn => btn.classList.remove('active'));

        // 클릭한 버튼에 활성 상태 추가
        // Add active state to the clicked button
        this.classList.add('active');
    });
});

// 아이템을 장바구니에 추가하는 기능
// Function to add an item to the cart
menuContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-btn')) { // 클릭한 요소가 추가 버튼인지 확인 / Check if the clicked element is an add button
        const menuCard = event.target.closest('.menu-card'); // 클릭된 버튼이 속한 메뉴 카드 탐색 / Locate the menu card of the clicked button
        const menuName = menuCard.querySelector('h3').textContent; // 메뉴 이름 추출 / Extract the menu name
        const price = parseFloat(event.target.dataset.price); // 데이터 속성에서 가격 추출 / Extract the price from the data attribute

        // 선택된 옵션 확인
        // Check the selected option
        const selectedOption = menuCard.querySelector('.option-btn.active, .option-btn2.active');
        if (!selectedOption) {
            alert('옵션을 선택해주세요! (Please select an option!)'); // 옵션이 선택되지 않은 경우 경고창 표시 / Show an alert if no option is selected
            return;
        }

        const optionType = selectedOption.dataset.option; // 선택된 옵션 유형 추출 / Extract the selected option type (e.g., HOT or ICE)

        // 메뉴 이름과 옵션으로 고유한 키 생성
        // Generate a unique key using menu name and option
        const cartKey = `${menuName}-${optionType}`;

        // 장바구니에 아이템 추가 또는 수량 증가
        // Add an item to the cart or increase its quantity
        if (cart[cartKey]) {
            cart[cartKey].quantity++; // 이미 존재하는 아이템이면 수량 증가 / Increase quantity if the item already exists
        } else {
            cart[cartKey] = {
                name: menuName, // 메뉴 이름 저장 / Save the menu name
                price: price, // 가격 저장 / Save the price
                option: optionType, // 선택된 옵션 저장 / Save the selected option
                quantity: 1 // 초기 수량 설정 / Set the initial quantity
            };
        }

        updateCartDisplay(); // 장바구니 화면 업데이트 / Update the cart display
    }
});

// 장바구니 화면 업데이트
// Update the cart display
function updateCartDisplay() {
    cartItems.innerHTML = ''; // 기존 장바구니 표시 내용 초기화 / Clear existing cart display content
    let total = 0; // 총 가격 초기화 / Initialize the total price

    // 장바구니 객체를 반복하며 화면에 표시
    // Iterate over the cart object and display on the screen
    for (const key in cart) {
        const item = cart[key]; // 현재 아이템 데이터 가져오기 / Retrieve the current item data
        const itemTotal = item.price * item.quantity; // 아이템 총 가격 계산 / Calculate the total price for the item
        total += itemTotal; // 총 가격에 더하기 / Add to the total price

        // 장바구니 아이템 요소 생성
        // Create cart item elements
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item'; // 스타일 적용을 위한 클래스 추가 / Add a class for styling
        cartItem.innerHTML = `
            <div>${item.name}</div> <!-- 아이템 이름 표시 / Display item name -->
            <div>${item.option}</div> <!-- 선택된 옵션 표시 / Display selected option -->
            <div>${item.quantity}</div> <!-- 수량 표시 / Display quantity -->
            <div>$${itemTotal.toFixed(2)}</div> <!-- 아이템 총 가격 표시 / Display total price for the item -->
            <button class="delete-btn" onclick="deleteItem('${key}')">×</button> <!-- 삭제 버튼 / Delete button -->
        `;
        cartItems.appendChild(cartItem); // 장바구니 화면에 추가 / Append to the cart display
    }

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`; // 총 가격 표시 업데이트 / Update total price display

    // 총 가격 표시 영역으로 부드럽게 스크롤
    // Smooth scroll to the total price display
    setTimeout(() => {
        totalDisplay.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    }, 100); // 약간의 딜레이 추가로 자연스러운 스크롤 / Add slight delay for natural scrolling
}

// 장바구니에서 아이템 삭제
// Remove an item from the cart
function deleteItem(key) {
    delete cart[key]; // 장바구니 객체에서 아이템 제거 / Remove item from the cart object
    updateCartDisplay(); // 장바구니 화면 업데이트 / Update the cart display
}
