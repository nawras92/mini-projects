import React, {useState} from 'react';

let Fact = (props) => {
	const [contentShown, setContentShown] = useState(false);
	function handleClick(e){
		e.preventDefault();
		let newValue = setContentShown(!contentShown);
		console.log(e.target, contentShown);
	}
  return (
		<React.Fragment>
			<button className="note-button" onClick={handleClick}>
	  			{props.title}
			 </button>
	  		 {
				contentShown && (
					<div className="note-panel">
						<p className="note-text">
							{props.text}
						</p>
					</div>

				)
			 }
		</React.Fragment>
  );

}

export default Fact;
