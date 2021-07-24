const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL ||'mongodb://localhost/mynotes';
const DATABASE_OPTIONS =  { useUnifiedTopology: true, useNewUrlParser: true  };

const mongoose = require('mongoose');
const notesRouter = require('./routes/notes.js');
const messages = require('./assets/messages.js');

const express = require('express');
const app = express();

// connect to database
mongoose.connect(DATABASE_URL, DATABASE_OPTIONS);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('connected to database'));

// app.use
app.use(express.json());
app.use('/notes', notesRouter);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
