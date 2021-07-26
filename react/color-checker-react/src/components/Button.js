import React from 'react';
import PropTypes from 'prop-types';

let button = (props) => {
	return (
		<button {...props} >Check Color</button>

	)
}
button.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
}

button.defaultProps = {
	name: "container__button",
	className: "container__button",
}

export default button;
