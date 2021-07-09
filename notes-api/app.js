const PORT = process.env.PORT || 3000;

const notes = require('./models/notes.js');
const messages = require('./assets/messages.js');
const validate = require('./validate.js');

const express = require('express');

const app = express();

// app.use
app.use(express.json());

// View all notes
app.get('/api/notes', (req, res) => res.status(200).send(notes));

// Get a specific note
app.get('/api/notes/:id', (req, res) => {
	const note = notes.find(n => n.id == req.params.id);
	if(!note){
		res.status(404).send(messages.notFound);
		return;
	}
	res.send(note);
});

// Add a new note
app.post('/api/notes', (req, res) => {
	if (validate(req).err){
		res.status(400).send(validate(req).message);
		return;
	}
	const note = {
		id: parseInt(req.body.id),
		title: req.body.title,
		category: req.body.category
	};
	notes.push(note);
	res.status(200).send(note);
	return;
});


//Update a note
app.put('/api/notes/:id', (req, res) => {
	const note = notes.find(n => n.id == req.params.id);
	if(!note){
		res.status(404).send(messages.notFound);
		return;
	}
	if (validate(req).err){
		res.status(400).send(validate(req).message);
		return;
	}
	note.id = req.body.id;
	note.title = req.body.title;
	note.category = req.body.category;
	res.send(note);
});

// Delete a note
app.delete('/api/notes/:id', (req, res) => {
	const note = notes.find(n => n.id == req.params.id);
	if(!note){
		res.status(404).send(messages.notFound);
		return;
	}
	if (notes.indexOf(note) > -1) notes.splice(notes.indexOf(note), 1);
	res.status(200).send(messages.deleted);

})
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
