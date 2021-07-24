const Note = require('../models/note.js');

async function getNote(req, res, next){
	let note;
	try{
		note = await Note.find({_id: req.params.id});
		if(note === null){
			return res.status(404).json({message: "Cannot find note"});
		}
	}catch(err){
		return res.status(500).json({message: 'The ID selected was not found'});
	}
	res.note = note;
	next();
}


module.exports = getNote;
