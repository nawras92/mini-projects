import React, {useState} from 'react';
import './App.css';
import Fact from './components/Fact.jsx';
import facts from './data/facts.js';

function App() {
  return (
	<React.Fragment>  
	  {
		facts.map(fact => {
			return (
				<div className="note" key={fact.id}>
					< Fact title={fact.title} text={fact.text} />
				</div>
			)
		})
	  }
	</React.Fragment>
  );
}

export default App;
