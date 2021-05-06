let hidden = document.querySelector('.mob-hidden');
let half = document.querySelector('.mob-half');
let texts = document.querySelectorAll('.jq-selectbox__select-text');

window.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 388) {
        hidden.style.display = 'none';
        half.classList.add('fields-wrap__label--50');
        for (let i = 0; i < texts.length; i++) {
            texts[i].style.maxWidth = '166px';
        };
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth <= 388) {
        hidden.style.display = 'none';
        half.classList.add('fields-wrap__label--50');
        for (let i = 0; i < texts.length; i++) {
            texts[i].style.maxWidth = '166px';
        };
    } else {
        hidden.style.display = '';
        half.classList.remove('fields-wrap__label--50');
        for (let i = 0; i < texts.length; i++) {
            texts[i].style.maxWidth = '';
        };
    }
});