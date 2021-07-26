import React from 'react';
import PropTypes from 'prop-types';

let input = (props) => {
	return (
		<input {...props}/ >
	)
}

input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	maxLength: PropTypes.number,
	className: PropTypes.string,
	placeholder: PropTypes.string,
}

input.defaultProps = {
	name: "container__input",
	type: "text",
	maxLength: 7,
	className: "container__input",
	placeholder: "#efefef",
}

export default input;
