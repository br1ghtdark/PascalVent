/*========================Header========================*/
const header__top = document.querySelector('.header__top');
const header__body = document.querySelector('.header__body');
const header__topHeight = header__top.offsetHeight;
const header__bodyHeight = header__body.offsetHeight;
console.log(header__topHeight)
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance >= header__bodyHeight + header__topHeight && document.documentElement.clientWidth > 1100) {
		header__top.classList.add('header__top--fixed');
		header__body.style.marginTop = `${header__topHeight}px`;
	}
    else {
		header__top.classList.remove('header__top--fixed');
		header__body.style.marginTop = null;
	}
})

/*========================Header========================*/

/*=========================Burger_menu========================*/

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
})

$('.burger, .burger--follow, .overlay').on('click', function (e) {
e.preventDefault()
$('.header__top').toggleClass('header__top--open')
$('.overlay').toggleClass('overlay--show')
$('.burger').toggleClass('burger--active')
})

/*=========================Burger_menu========================*/

/*========================Header-PopUp========================*/
let popupback = document.querySelector('.header__top-popup'); // Фон попап окна
let popup_body = document.querySelector('.popup__top'); // Само окно
let openPopupBtn = document.querySelectorAll('.header__top-button'); // Кнопки для показа окна
let closePopupBtn = document.querySelector('.popup__top-close'); // Кнопка для скрытия окна

openPopupBtn.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupback.classList.add('active'); // Добавляем класс 'active' для фона
        popup_body.classList.add('active'); // И для самого окна
    })
});

closePopupBtn.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupback.classList.remove('active'); // Убираем активный класс с фона
    popup_body.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popup_body) { // Если цель клика - фот, то:
        popupback.classList.remove('active'); // Убираем активный класс с фона
        popup_body.classList.remove('active'); // И с окна
    }
});
/*========================Header-PopUp========================*/

/*========================Application-PopUp========================*/
let popupBg = document.querySelector('.popup__application'); // Фон попап окна
let popup = document.querySelector('.popup__application-body'); // Само окно
let openPopupButtons = document.querySelectorAll('.application-open'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__application-close'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popup) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});
/*========================Application-PopUp========================*/

/*========================Servicecs_tabs========================*/
const tabsBtn   = document.querySelectorAll(".services__btn-def");
const tabsItems = document.querySelectorAll(".services__content-block");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.services__btn-def').click();
/*========================Servicecs_tabs========================*/

/*=========================Portfolio_slider========================*/
new Swiper('.portfolio__body', {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        nextEl: ".portfolio__arrows-right",
        prevEl: ".portfolio__arrows-left"
    },
    speed: 1300,

});
/*=========================Portfolio_slider========================*/

/*=========================Clients_slider========================*/
new Swiper('.clients__slider', {
    slidesPerView: "auto",
    spaceBetween: 20,
    slideClass: "clients__slider-item",
    navigation: {
        nextEl: ".clients__arrows-right",
        prevEl: ".clients__arrows-left"
    },
    speed: 1300,
});
/*=========================Clients_slider========================*/



