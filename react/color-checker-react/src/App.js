import React from 'react';

import InputField from './components/Input.js';
import Button from './components/Button.js';
import './App.css';

function App() {
	const [colorValue, setColorValue] = React.useState('');
	function getColor(e){
		setColorValue(e.target.value);
	}
	function handleClick(e){
		e.preventDefault();
		document.getElementById('root').style.backgroundColor = colorValue;
	}
	return (
	  < React.Fragment >
		  < InputField onChange={getColor} / >
		  < Button onClick={handleClick}/>
	  < / React.Fragment >
	);
}

export default App;
