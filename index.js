'use strict';

const illustrations = {
    mail: {
        heading: 'Download Complete!',
        button1: 'Download Failed? Try Again',
        button2: '<a href="https://www.youtube.com/@maxifitcherpyrotech" style="color: yellow; font-size: 25px;">SUBSCRIBE TO OUR CHANNEL</a>',
        img: `
            <div class="mail">
                <div class="envelope-top"></div>
                <div class="envelope-back"></div>
                <div class="letter">
                    <div class="face">
                        <div class="eye-left"></div>
                        <div class="eye-right"></div>
                        <div class="mouth"></div>
                    </div>
                </div>
                <div class="envelope">
                    <div class="envelope-left"></div>
                    <div class="envelope-right"></div>
                    <div class="envelope-bottom"></div>
                </div>
            </div>
    `}
}

const btnContainer = document.querySelector('.buttons');
const popupContainer = document.querySelector('#popupContainer');

btnContainer.addEventListener('click', function(e) {
    const btn = e.target.closest('.popup-btn');
    if(!btn) return;
    const type = btn.dataset.popup;
    createPopup(type);
});

popupContainer.addEventListener('click', function(e) {
    if(!e.target.closest('button') && !e.target.closest('.popup-close') && !e.target.classList.contains('popup')) return;
    hidePopup();
})

function createPopup(type = 'mail') {
    const html = `
        <div class="popup popup-${type}">
            <div class="popup-content">
                <div class="popup-close">&times;</div>
                <div class="popup-header">
                    ${illustrations[type].img}
                </div>
                <div class="popup-text">
                    <h1>${illustrations[type].heading}</h1>
                    <p>
                        Well, the ringtone sounds awesome. How about you if you say thanks by subcribing to our Channel...
                    </p>
                    <button class="btn-grey">${illustrations[type].button1}</button>
                    <button>${illustrations[type].button2}</button>
                </div>
            </div>
        </div>
    `;

    popupContainer.insertAdjacentHTML('afterbegin', html);
}

function hidePopup() {
    const popup = document.querySelector('.popup');
    const popupContent = popup.querySelector('.popup-content');
    
    popupContent.style.animation = 'hide .2s linear forwards';
    popupContent.addEventListener('animationend', function() {
        popupContainer.innerHTML = '';
    });
}

createPopup('mail');


