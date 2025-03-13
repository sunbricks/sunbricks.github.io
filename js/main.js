document.addEventListener('DOMContentLoaded', function() {
  createStars();
});

function createStars() {
  const starContainer = document.querySelector('.stars-container');
  
  // 전체 문서 높이의 50%를 별 영역으로 사용
  const containerHeight = document.documentElement.scrollHeight * 0.5;
  starContainer.style.height = containerHeight + 'px';
  
  const containerWidth = document.documentElement.clientWidth;
  const numStars = 100; // 생성할 별의 개수
  
  // 기존 별 제거
  starContainer.innerHTML = '';
  
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // 별의 x 좌표는 전체 너비, y 좌표는 전체 문서 높이의 50% 영역 내에서 랜덤하게
    const posX = Math.random() * containerWidth;
    const posY = Math.random() * containerHeight;
    star.style.left = posX + 'px';
    star.style.top = posY + 'px';
    
    // 별의 크기를 랜덤하게 (예: 1px ~ 3px)
    const size = Math.random() * 2 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    
    // 랜덤 애니메이션 딜레이 (0 ~ 3초)
    star.style.animationDelay = Math.random() * 3 + 's';
    
    starContainer.appendChild(star);
  }
}

window.addEventListener('resize', createStars);

// --------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('header');
  const threshold = 50;

  window.addEventListener('scroll', function() {
    if (window.scrollY > threshold) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    }
  });
});

// --------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.header__nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href'); // 예: "#about"
      const targetEl = document.querySelector(targetId);
      
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// --------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const titleElement = document.querySelector('.first__title');
  const text = "Markup Developer";
  titleElement.textContent = "";
  let index = 0;
  const delay = 150;

  function typeCharacter() {
      titleElement.textContent += text.charAt(index);
      index++;
      if (index < text.length) {
          setTimeout(typeCharacter, delay);
      } else {
          titleElement.classList.add('finished');
      }
  }
  typeCharacter();
});

// --------------------------------
