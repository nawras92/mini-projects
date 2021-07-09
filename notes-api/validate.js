const notes = require('./models/notes.js');
const messages = require('./assets/messages.js');

const validateId = id => {
	let validId = /^[0-9]+$/;
	return validId.test(id);
};

const validateCategory = cat => {
	let validCats = ["Relaxation", "Household Chores", "YT", "Study", "Other"];
	return validCats.includes(cat);
};

const validateTitle = title => {
	let validTitle = /^(\S+\s?)+$/;
	return validTitle.test(title);
};

const isDuplicate = id => {
	return notes.find(note => note.id === parseInt(id));
};


const validateNote = (req) => {
	let message = "";
	if (!validateId(req.body.id)) message += messages.notValidId;
	if( !validateCategory(req.body.category)) message += messages.notValidCategory;
	if (!validateTitle(req.body.title)) message += messages.notValidTitle;
	if (isDuplicate(req.body.id)) message += messages.duplicateId;
	return message ? {"message": message, "err": 1} : {"err": 0};
};

module.exports = validateNote;

