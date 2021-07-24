let getButton = document.getElementById('user_form');
let results = document.getElementById("results"); 

getButton.addEventListener('submit', getRequest);

function getRequest(event){
	event.preventDefault();
	results.textContent = '';
	let noteId = event.target.noteId.value;
	let ul = document.createElement('ul');
	results.appendChild(ul);
	fetch(`http://localhost:3000/notes/${noteId}`)
	.then(response => response.json())
	.then(data => {

		if(!noteId){
			for(let i in data){
				let li = document.createElement('li');
				li.textContent = `${data[i].title} |  ${data[i].category} (${data[i]._id})`;
				let newline = document.createElement('br');
				li.appendChild(newline);
				ul.appendChild(li);
			}
		} else {
			console.log(data);
			let li = document.createElement('li');
			li.textContent = `${data[0].title} |  ${data[0].category} (${data[0]._id})`;
			ul.appendChild(li);
		}
		console.log('data: ', data);

	})
}

let postButton = document.getElementById('user_form_post');
postButton.addEventListener('submit', newPost);

function newPost(event, post){
	event.preventDefault();
	let title = event.target.title_input.value;
	let category = event.target.cat_input.value;
	post = {
		title: title,
		category: category
	};
	const options = {
		method: 'POST',
		body: JSON.stringify(post),
		headers : new Headers({
			'Content-Type': 'application/json'
		})
	}
	return fetch('http://localhost:3000/notes', options)
	.then(res => res.json())
	.then(res => console.log(res))
	.then(error =>  console.error('error: ', error));
}

let deleteButton = document.getElementById("user_form_delete");
deleteButton.addEventListener('submit', deletePost);

function deletePost(event){
	event.preventDefault();
	let noteId = event.target.noteId.value;
	const options = {
		method: 'DELETE',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({
			noteId: noteId
		})
	}
	const URL = `http://localhost:3000/notes/${noteId}`;
	fetch(URL, options)
	.then(response => response.json())
	.then(data => console.log(data))
}

let updateButton = document.getElementById('user_form_update');
updateButton.addEventListener('submit', updatePost);

function updatePost(event, post){
	event.preventDefault();
	let noteId = event.target.noteId.value;
	let title = event.target.title_input.value;
	let category = event.target.cat_input.value;
	post = {
		title: title,
		category: category
	}
	const options = {
		method: 'PATCH',
		body: JSON.stringify(post),
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}
	const URL = `http://localhost:3000/notes/${noteId}`;
	return fetch (URL, options)
	.then(response => response.json())
	.then(data => console.log('movie to update: ', data));
}
