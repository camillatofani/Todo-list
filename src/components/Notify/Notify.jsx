import PropTypes from 'prop-types'
import styles from './Notify.module.css';

function Notify({ text }) {
	return (
		<p className={ styles.notify }>{ text }</p>
	)
}

Notify.propTypes = {
	text: PropTypes.string.isRequired
};

export default Notify
