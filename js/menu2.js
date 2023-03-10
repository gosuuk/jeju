var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

const gotoTopEl = document.querySelector('#goto-top')
window.addEventListener('scroll', function() {
  if (window.scrollY > 500) { // 페이지 스크롤 위치가 500px이 넘으면
    //상단으로 스크롤 버튼 보이기
    gsap.to(gotoTopEl, .2, {
      x: 0
    })
  } else { // 페이지 스크롤 위치가 500px이 넘지 않으면.
    gsap.to(gotoTopEl, .2, { // 상단으로 스크롤 버튼 숨기기
      x: 100
    })
  }
}, 300)
gotoTopEl.addEventListener('click', function() { //스크롤 버튼 클릭시
  gsap.to(window, .7, { // 페이지 최상단으로 0.7초 동안부드럽게 이동
    scrollTo: 0
  })
})

class CardFlipOnScroll{
    constructor(wrapper, sticky) {
        this.wrapper = wrapper
        this.sticky = sticky
        this.cards = sticky.querySelectorAll('.card')
        this.length = this.cards.length

        this.start = 0
        this.end = 0
        this.step = 0
    }
    init(){
        this.start = this.wrapper.offsetTop
        this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight
        this.step = (this.end - this.start) / (this.length * 2)
    }
    animate(){
        this.cards.forEach((card, i) => {
            const s = this.start + this.step * i 
            const e = s + this.step * (this.length + 1)

            if(scrollY <= s){
                card.style.transform = `
                perspective(100vw)
                translateX(100vw)
                rotateY(180deg)
                `
            }else if(scrollY > s && scrollY <= e - this.step){
                card.style.transform = `
                perspective(100vw)
                translateX(${100 - (scrollY - s) / (e - s) * 100}vw)
                rotateY(180deg) `
            }else if(scrollY > e - this.step && scrollY <= e){
                card.style.transform = `
                perspective(100vw)
                translateX(${100 - (scrollY - s) / (e - s) * 100}vw)
                rotateY(${180 - -(scrollY - (e - this.step)) / this.step * 180}deg)
                `
            }else if(scrollY > e){
                card.style.transform = `
                perspective(100vw)
                translateX(0vw)
                rotateY(0deg)
                `
            }
        })
    }
}
const mainContent1 = document.querySelector('.main-content-1')
const sticky = document.querySelector(".sticky")
const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
cardFlipOnScroll.init()

window.addEventListener('scroll', ()=>{
    cardFlipOnScroll.animate()
})
window.addEventListener('resize', ()=>{
    cardFlipOnScroll.init()
})

const wrapper = document.getElementById("bubble-wrapper");
let index = 0;

const Color = {
  Red: "239, 83, 80",
  Orange: "255, 160, 0",
  Yellow: "253, 216, 53",
  Green: "42, 252, 152",
  Blue: "41, 121, 255",
  Indigo: "57, 73, 171",
  Violet: "103, 58, 183"
}

const colors = [
  Color.Red, 
  Color.Orange, 
  Color.Yellow, 
  Color.Green, 
  Color.Blue, 
  Color.Indigo, 
  Color.Violet
];

const animateBubble = x => {  
  const bubble = document.createElement("div");
  
  bubble.className = "bubble";
  
  bubble.style.left = `${x}px`;
  
  wrapper.appendChild(bubble);
  
  setTimeout(() => wrapper.removeChild(bubble), 2000);
}
/* 마우스 좌표 찾아주는 기능 */
window.onmousemove = e => animateBubble(e.clientX);

