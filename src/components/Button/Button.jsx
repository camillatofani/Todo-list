import PropTypes from 'prop-types'

function Button({ handlerClick, text, style = null }) {
	return (
		<button onClick={ handlerClick } className={ style }>
			{ text }
		</button>
	)
}

Button.propTypes = {
	handlerClick: PropTypes.func,
	text: PropTypes.string.isRequired,
	style: PropTypes.string
};

export default Button
