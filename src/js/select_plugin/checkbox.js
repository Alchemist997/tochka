let checkbox = document.querySelector('.checkbox');
let checkboxArea = document.querySelector('.checkbox-area');
let mark = document.querySelector('.checkbox-area__mark');
let hidings = document.querySelectorAll('.hiding');

let sign = function() {
    checkboxArea.style.border = 'none';
    checkboxArea.style.backgroundColor = '#EF483E';
    mark.style.display = 'block';
    for (let i = 0; i < hidings.length; i++) {
        hidings[i].style.display = 'block';
    };
};

if (checkbox.checked) {
    sign();
};

checkbox.onchange = function() {
    if (checkbox.checked) {
        sign();
    } else {
        checkboxArea.style.removeProperty('border');
        checkboxArea.style.removeProperty('background-color');
        mark.style.removeProperty('display');
        for (let i = 0; i < hidings.length; i++) {
            hidings[i].style.display = '';
        };
    };
};