import PropTypes from 'prop-types'

function Subtitle({ subtitle }) {
	return (
		<h3>{ subtitle }</h3>
	)
}

Subtitle.propTypes = {
	subtitle: PropTypes.string.isRequired
};

export default Subtitle
