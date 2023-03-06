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

/*=========================Portfolio_slider========================*/

new Swiper('.portfolio__body', {
    slidesPerView: "auto",
    // loop: true,
    spaceBetween: 30,
});

/*=========================Clients_slider========================*/

new Swiper('.clients__slider', {
    slidesPerView: "auto",
    // loop: true,
    spaceBetween: 20,
    slideClass: "clients__slider-item",

});

