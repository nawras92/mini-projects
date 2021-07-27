import React from 'react';
import './App.css';
import Note from './components/Note.js';
import notes from './data/Notes.js';

function App() {
  return (
	  <React.Fragment>
	  {
		notes.map(note => {
			return (
				< Note title={note.title} category={note.category} key={note.id}/>
			)
		})
	  }
	  </React.Fragment>
  );
}

export default App;
