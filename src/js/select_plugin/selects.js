let hidden = document.querySelector('.mob-hidden');
let half = document.querySelector('.mob-half');
let texts = document.querySelectorAll('.jq-selectbox__select-text');
let placeholder = document.querySelector('.placeholder');

window.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 388) {
        hidden.style.display = 'none'; // Скрываем поле 'Класс опасности'
        half.classList.add('fields-wrap__label--50'); // Уменьшаем наполовину ширину поля 'Тип груза'
        for (let i = 0; i < texts.length; i++) {
            texts[i].style.maxWidth = '166px'; // Нужно для плагина селектов
        };
    }
    placeholder.textContent += 'а';
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