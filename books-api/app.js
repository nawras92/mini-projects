const PORT = process.env.PORT || 3000;

const books = require('./models/books.js');
const validate = require('./validate.js');

const express = require("express");

const app = express();

// app.use
app.use(express.json());

//Find a book
function doesBookExist(isbn){
	let message;
	const book = books.find(b => b.isbn === isbn);
	if (!book) message = (`There is no book with an ISBN ${isbn} in our database.`);
	return {"message": message, "err": message ? 1 : 0, "book": book};
}

// View all books
app.get('/api/books', (req, res) => res.status(200).send(books));

// Get a specific book based on ISBN
app.get('/api/books/:isbn', (req, res) => {
	let doesExist = doesBookExist(req.params.isbn);
	if(doesExist.err){
		res.status(404).send(doesExist.message);
		return;
	}
	res.send(doesExist.book);
});

// Add a new book
app.post('/api/books', (req, res) => {
	if (validate(req, res).err){
		res.status(400).send(validate(req, res).message);
		return;
	}
	const book = {
		isbn : req.body.isbn,
		author : req.body.author,
		title : req.body.title
	}
	books.push(book);
	res.status(200).send(book);
	return;	
});

// Update a book
app.put('/api/books/:isbn', (req, res) => {
	let doesExist = doesBookExist(req.params.isbn);
	if(doesExist.err){
		res.status(404).send(doesExist.message);
		return;
	}
	if (validate(req, res).err){
		res.status(400).send(validate(req, res).message);
		return;
	}
	doesExist.book.isbn = req.body.isbn;
	doesExist.book.author = req.body.author;
	doesExist.book.title = req.body.title;
	res.send(doesExist.book);
});

// Delete a book
app.delete('/api/books/:isbn', (req, res) => {
	let doesExist = doesBookExist(req.params.isbn);
	if(doesExist.err){
		res.status(404).send(doesExist.message);
		return;
	}
	const index = books.indexOf(doesExist.book);
	if (index > -1) books.splice(index, 1);
	res.send(`The book "${doesExist.book.title}" of ISBN "${doesExist.book.isbn}" is deleted successfully.`)
});

app.listen(PORT, () => console.log(`The server is running on ${PORT}`))
