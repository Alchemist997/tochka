window.addEventListener('DOMContentLoaded', function() {
	let selectsOrig = document.querySelectorAll('select');
	let selects = document.querySelectorAll('.jqselect');
	let arrows = document.querySelectorAll('.jq-selectbox__trigger-arrow');

	for (let i = 0; i < arrows.length; i++) {
		selects[i].onclick = function () { // Разворот стрелки при кликах по селекту
			if (selects[i].classList.contains('opened')) {
				arrows[i].style.transform = 'translateY(4px) rotate(-135deg)';
			} else {
				arrows[i].style.transform = 'rotate(45deg)';
			}
		}
		selectsOrig[i].onblur = function () { // Возврат стрелки при клике вне селекта
			arrows[i].style.transform = 'rotate(45deg)';
		}
	}
});