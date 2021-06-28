// deal with buttons
let buttons = document.getElementsByClassName("container__buttons")[0];
let textarea = document.getElementById('container__textarea');
let wordsCount = buttons.addEventListener('click', function(e){
	e.preventDefault();
	let count = parseInt(e.target.id.split("-")[1]);
	let urlPortion = `/ajax`; 
	// launch ajax request
	let xhr = new XMLHttpRequest();
	xhr.responseType = 'json';
	xhr.open('POST', urlPortion , true);
	xhr.onload = function(){
		if(this.status === 200){
			textarea.textContent = '';
			textarea.textContent = xhr.response.text;
		}
	}
	xhr.onerror = function(){
		console.log("Some error occured")
	}
	//xhr.open("post", "");
	let data = {"count": count};
	xhr.send(JSON.stringify(data));
});

// deal with copy to clipboard button
let copyButtons = document.getElementsByClassName("container__button_copy");
for (copyButton of copyButtons){
	copyButton.addEventListener('click', function(e){
		e.preventDefault();
		textarea.select();
		textarea.setSelectionRange(0, 99999);
		document.execCommand("copy");
	});
}
