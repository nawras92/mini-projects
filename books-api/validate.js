const books = require('./models/books.js');

const validateISBN = isbn  => {
	let validISBN = /^([0-9]{3}-)?[0-9]{10}$/;
	return validISBN.test(isbn);
}


const validateName = author => {
	let validName = /^(\S+ )+\S+$/;
	return validName.test(author);
}

const validateTitle = title => {
	let validTitle = /^(\S+\s?)+$/;
	return validTitle.test(title);
}

const isDuplicate = isbn => {
	return books.find(book => book.isbn === isbn);
}

const validateBook = (req, res) => {
	let message = "";
	if(!validateISBN(req.body.isbn)) message += `The ISBN "${req.body.isbn}" is NOT valid. `; 
	if(!validateName(req.body.author)) message += `The author "${req.body.author}" is NOT valid. `; 
	if(!validateTitle(req.body.title)) message += `The title "${req.body.title}" is NOT valid. `; 
	if(isDuplicate(req.body.isbn)) message += `There is a book of the same ISBN "${req.body.isbn}" already exists. ISBN is a unique number given to a book.`; 
	return message ? {"message": message, "err": 1} : {"err": 0};

}

module.exports = validateBook; 
