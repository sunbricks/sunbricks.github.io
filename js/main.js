document.addEventListener('DOMContentLoaded', function() {
  createStars();
});

function createStars() {
  const starContainer = document.querySelector('.stars-container');
  
  const containerHeight = document.documentElement.scrollHeight * 0.95;
  starContainer.style.height = containerHeight + 'px';
  
  const containerWidth = document.documentElement.clientWidth;
  const numStars = 200; // 생성할 별의 개수
  
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

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".header__nav-toggle");
  const navList = document.querySelector(".header__nav-list");

  toggleButton.addEventListener("click", () => {
    navList.classList.toggle("header__nav-list--active");
    toggleButton.classList.toggle("active");
  });
});

// --------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.header__nav-link');
  const navList = document.querySelector('.header__nav-list');
  const navToggle = document.querySelector('.header__nav-toggle');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // 메뉴가 열려있다면 메뉴 리스트와 햄버거 버튼의 active 클래스를 제거
      if(navList.classList.contains('header__nav-list--active')) {
        navList.classList.remove('header__nav-list--active');
      }
      
      if(navToggle.classList.contains('active')) {
        navToggle.classList.remove('active');
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

document.addEventListener('DOMContentLoaded', function() {
  const goTopBtn = document.querySelector('.go-top');

  // 스크롤 위치에 따라 버튼을 보여주거나 숨깁니다.
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      goTopBtn.style.opacity = 1;
      goTopBtn.style.pointerEvents = 'auto';
    } else {
      goTopBtn.style.opacity = 0;
      goTopBtn.style.pointerEvents = 'none';
    }
  });

  // 버튼 클릭 시 페이지 상단으로 부드럽게 스크롤
  goTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
