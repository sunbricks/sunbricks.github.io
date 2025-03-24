let SwiperTop = new Swiper('.swiper-container', {
    spaceBetween: 20,
    centeredSlides: true,
    speed: 5000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView: 5,
    allowTouchMove: false,
    disableOnInteraction: true,
    observer: true,	// 추가
    observeParents: true,	// 추가
    
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            425: {
                slidesPerView: 2,
                spaceBetween: 10,
            },

            475: {
                slidesPerView: 2,
            },

            768: {
                slidesPerView: 4,
                spaceBetween: 10,
            },

            1300: {
                slidesPerView: 5,
            },
        }
    });


const Day = document.querySelector("#Day");
const Hour = document.querySelector("#Hour");
const Min = document.querySelector("#Min");
const Sec = document.querySelector("#Sec");

function diffDay() {
    const masTime = new Date("2022-12-20");
    // 12월 20일은 임의의 날짜로 설정 해놨습니다.
    const todayTime = new Date();
    
    const diff = masTime - todayTime;

    const diffDay = String(Math.floor(diff / (1000*60*60*24)));
    const diffHour = String( Math.floor((diff / (1000*60*60)) % 24)).padStart(2,"0");
    const diffMin = String(Math.floor((diff / (1000*60)) % 60)).padStart(2,"0");
    const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2,"0");

    Day.innerText = `${diffDay}`;
    Hour.innerText = `${diffHour}`;
    Min.innerText = `${diffMin}`;
    Sec.innerText = `${diffSec}`;

    console.log(masTime);
}

diffDay();
setInterval(diffDay, 1000);
// 태블릿, 모바일 버전


const DayPC = document.querySelector("#Day_PC");
const HourPC = document.querySelector("#Hour_PC");
const MinPC = document.querySelector("#Min_PC");
const SecPC = document.querySelector("#Sec_PC");

function diffDayPC() {
    const masTimePC = new Date("2022-12-20");
    // 12월 20일은 임의의 날짜로 설정 해놨습니다.
    const todayTimePC = new Date();
    
    const diffPC = masTimePC - todayTimePC;

    const diffDayPC = String(Math.floor(diffPC / (1000*60*60*24)));
    const diffHourPC = String( Math.floor((diffPC / (1000*60*60)) % 24)).padStart(2,"0");
    const diffMinPC = String(Math.floor((diffPC / (1000*60)) % 60)).padStart(2,"0");
    const diffSecPC = String(Math.floor(diffPC / 1000 % 60)).padStart(2,"0");

    DayPC.innerText = `${diffDayPC}`;
    HourPC.innerText = `${diffHourPC}`;
    MinPC.innerText = `${diffMinPC}`;
    SecPC.innerText = `${diffSecPC}`;

    console.log(masTimePC);
}

diffDayPC();
setInterval(diffDayPC, 1000);
// PC 버전