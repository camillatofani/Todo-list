import PropTypes from 'prop-types'
import styles from './Task.module.css'

function Task({ id, name }) {
	return (
		<div className={ styles.task } data-id={ id }>
			{ name }
		</div>
	)
}

Task.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired
};

export default Task
