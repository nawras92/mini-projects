import React from 'react';

let Note = (props) => {
	return (
		<div className="note" key={props.id}>
			<div className="note-title">{props.title}</div>
			<div className="note-category">{props.category}</div>
		</div>
	)

}

export default Note;
