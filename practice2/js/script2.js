/* ==============================================
  핵심 1: 데이터 상태 관리 
  - 실무에서는 Redux/Context API 등으로 발전
  - UX 디자이너가 이해해야 할 부분:
    * 데이터 상태가 UI에 미치는 영향
    * 상태 변화에 따른 UI 피드백
============================================== */
const cart = {};  // 장바구니 상태 관리 객체

// UI 업데이트를 위한 DOM 요소 참조
const menuContainer = document.querySelector("#menu");
const cartItems = document.getElementById('cart-items');
const totalDisplay = document.getElementById('total');

/* ==============================================
  핵심 2: 사용자 인터랙션 처리
  - 실무에서는 React의 onClick 등으로 구현
  - UX 디자이너가 이해해야 할 부분:
    * 사용자 행동에 대한 시스템 반응
    * 인터랙션 흐름
============================================== */
// 옵션 선택 이벤트 처리
document.querySelectorAll('.option-btn, .option-btn2').forEach(button => {
   button.addEventListener('click', function() {
       const parentDiv = this.closest('.option-buttons');
       const allOptionButtons = parentDiv.querySelectorAll('.option-btn, .option-btn2');
       
       // 상태 변경에 따른 UI 업데이트
       allOptionButtons.forEach(btn => btn.classList.remove('active'));
       this.classList.add('active');
   });
});

/* ==============================================
  핵심 3: 데이터 변경과 UI 업데이트 흐름
  - 실무에서는 상태 관리 도구와 연동
  - UX 디자이너가 이해해야 할 부분:
    * 데이터 변경 시점
    * UI 업데이트 시점
    * 사용자 피드백 제공
============================================== */
// 장바구니 추가 기능 - 데이터 변경 발생
menuContainer.addEventListener('click', (event) => {
   if (event.target.classList.contains('add-btn')) {
       // 1. 사용자 입력 데이터 수집
       const menuCard = event.target.closest('.menu-card');
       const menuName = menuCard.querySelector('h3').textContent;
       const price = parseFloat(event.target.dataset.price);
       
       // 2. 유효성 검사 및 사용자 피드백
       const selectedOption = menuCard.querySelector('.option-btn.active, .option-btn2.active');
       if (!selectedOption) {
           alert('옵션을 선택해주세요!');
           return;
       }
       
       // 3. 데이터 상태 업데이트
       const optionType = selectedOption.dataset.option;
       const cartKey = `${menuName}-${optionType}`;
       
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
       
       // 4. UI 업데이트 트리거
       updateCartDisplay();
   }
});

/* ==============================================
  핵심 4: UI 동기화 및 사용자 피드백
  - 실무에서는 컴포넌트 기반 업데이트로 발전
  - UX 디자이너가 이해해야 할 부분:
    * UI 업데이트 타이밍
    * 사용자 피드백 시점
    * 성능 고려사항
============================================== */
function updateCartDisplay() {
   // 1. UI 초기화
   cartItems.innerHTML = '';
   let total = 0;

   // 2. 데이터 기반 UI 생성
   for (const key in cart) {
       const item = cart[key];
       const itemTotal = item.price * item.quantity;
       total += itemTotal;

       // 동적 UI 요소 생성
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

   // 3. 최종 UI 업데이트 및 사용자 피드백
   totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
   setTimeout(() => {
       totalDisplay.scrollIntoView({ 
           behavior: 'smooth', 
           block: 'end' 
       });
   }, 100);
}

// 삭제 기능 - 데이터 변경과 UI 업데이트
function deleteItem(key) {
   delete cart[key];  // 데이터 상태 변경
   updateCartDisplay();  // UI 동기화
}