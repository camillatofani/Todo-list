import PropTypes from 'prop-types'
import styles from './Title.module.css'

function Title({ title }) {
	return (
		<div className={styles.title}>{ title }</div>
	)
}

Title.propTypes = {
	title: PropTypes.string.isRequired
};

export default Title
