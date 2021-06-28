let input = document.getElementById('container__input');
let button = document.getElementById('container__button');
let container = document.getElementById('container');

button.addEventListener('click', function(e){
	e.preventDefault();
	let color = input.value;
	container.style.backgroundColor = color;
})

