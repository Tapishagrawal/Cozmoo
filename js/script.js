'use strict';
// Model Variables
const modal=document.querySelector('[data-modal]');
const modalCloseBtn=document.querySelector('[data-model-close]')
const modalCloseOverlay =document.querySelector('[data-modal-overlay]')

// Model function
const modalCloseFunc = function(){modal.classList.add('closed')}

// modal EventListener
modalCloseOverlay.addEventListener('click',modalCloseFunc)
modalCloseBtn.addEventListener('click',modalCloseFunc)

// Notification Toast variable
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// Notification Toast EventListener
toastCloseBtn.addEventListener('click', function(){
    notificationToast.classList.add('closed');
});

//mobile  menu variables
const mobileMenuOpenBtn=document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu=document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn=document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay=document.querySelector('[data-overlay]');

for(let i=0;i<mobileMenuOpenBtn.length;i++){
    // mobile menu function
    const mobileMenuCloseFunc=function(){
        mobileMenu[i].classList.remove('active');
        overlay[i].classList.remove('active');
    }
    mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        overlay[i].classList.add('active');
    });
    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc)
}

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion= document.querySelectorAll('[data-accordion]');
for(let i=0;i<accordionBtn.length;i++){
    accordionBtn[i].addEventListener('click', function () {
        const clickedBtn = this.nextElementSibling.classList.contains('active');

        for(let i=0; i<accordion.length; i++){
            if(clickedBtn) break;
            if(accordion[i].classList.contains('active')){
                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');
            }
        }
        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
    } );
}