const Note = require('../models/note.js');
const getNote = require('../utils/getNote');

const express = require('express');
const router = express.Router();

// View all notes
router.get('/', async (req, res) => {
	try{
		const notes =  await Note.find();
		res.json(notes);
	} catch(err) {
		res.status(500).json({message: err.message });
	}
});

// Get a specific note
router.get('/:id', getNote, (req, res) => {
	res.json(res.note);
});

// Add a new note
router.post('/', async (req, res) => {
	const note = new Note({
		title: req.body.title,
		category: req.body.category
	});
	try{
		const newNote = await note.save();
		res.status(201).json(newNote);
	}catch(err){
		res.status(400).json({ message: err.message });
	}
});

//Update a note
router.patch('/:id', getNote, async (req, res) => {
	if (req.body.title != null){
		res.note[0].title = req.body.title;
	}
	if (req.body.category != null){
		res.note[0].category = req.body.category;
	}
	try{
		const updatedNote = await res.note[0].save();
		res.status(201).json(updatedNote);
	}catch (err){
		res.status(400).json({message: err.message});	
	}
});

// Delete a note
router.delete('/:id', getNote, async (req, res) => {
	try {
		await Note.deleteOne({_id: res.note._id });
		res.json({message: "deleted note."});
	}catch(err){
		res.status(500).json({message: 'Couldnt find note'});
	}
})

module.exports = router;
