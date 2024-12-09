// script.js
document.addEventListener('DOMContentLoaded', function() {
  const korBtn = document.getElementById('korBtn');
  const engBtn = document.getElementById('engBtn');
  
  // 언어 전환 함수
  function toggleLanguage(lang) {
      const elements = document.querySelectorAll('[data-ko], [data-en]');
      
      elements.forEach(element => {
          if (lang === 'ko') {
              element.textContent = element.getAttribute('data-ko');
          } else {
              element.textContent = element.getAttribute('data-en');
          }
      });
  }
  
  // 버튼 활성화 상태 토글
  function toggleButtonState(activeBtn, inactiveBtn) {
      activeBtn.classList.add('active');
      inactiveBtn.classList.remove('active');
  }
  
  // 이벤트 리스너
  korBtn.addEventListener('click', function() {
      toggleLanguage('ko');
      toggleButtonState(korBtn, engBtn);
  });
  
  engBtn.addEventListener('click', function() {
      toggleLanguage('en');
      toggleButtonState(engBtn, korBtn);
  });
  
  // 초기 상태 설정
  toggleLanguage('ko');
});