import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Counter = () => {

	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);

	// Get Number
	function getStep(e){
		return !e.target.value ? setStep(1) : setStep(parseInt(e.target.value));
	}
	// Increment Button
	let ButtonInc = (props) => {
		return (
			<button {...props} 
			onClick={()=> setCount(count + step)}>
				Increment by {step}
			</button>
		)
	}

	ButtonInc.propTypes = {
		className: PropTypes.string,
		title: PropTypes.string
	}
	ButtonInc.defaultProps = {
		className: 'container__button container__button_inc',
		title: 'Increment by 1'
	}

	// Decrement Button
	let ButtonDec = (props) => {
		return (
			<button {...props} 
			onClick={()=> setCount(count - step)}>
				Decrement  by {step}
			</button>
		)
	}
	ButtonDec.propTypes = {
		className: PropTypes.string,
		title: PropTypes.string
	}
	ButtonDec.defaultProps = {
		className: 'container__button container__button_dec',
		title: 'Decrement by 1'
	}

	return(
		<React.Fragment>
			<div className="container__display">
				<input className="container__input" type="number" placeholder="Step" onKeyPress={getStep} />	
				<p className="container__text">The counter value is {count}</p>
				<p className="container__text">The counter step is {step}</p>
			</div>
			< ButtonInc />
			<ButtonDec / >

		</React.Fragment>
	)

}

export default Counter; 
