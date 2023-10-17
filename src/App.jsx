import { useState, useEffect } from 'react'
import Title from './components/Title/Title.jsx'
import Subtitle from './components/Subtitle/Subtitle.jsx'
import Task from './components/Task/Task.jsx'
import Notify from './components/Notify/Notify.jsx'
import Button from './components/Button/Button.jsx'

function App() {
	const initialValue = localStorage.getItem('tasks')
	const [tasks, setTasks] = useState(JSON.parse(initialValue))
	const [newTask, setNewTask] = useState('')
	const [error, setError] = useState(false)
	const [deleteAll, setDeleteAll] = useState(false)

	useEffect(() => {
		if (!tasks) {
			setDeleteAll(false)
		} else {
			setDeleteAll(true)
		}
	}, []);

	function addTask() {
		if (newTask != '') {
			const newTaskId = { id: Date.now(), name: newTask }
			if (!tasks) {
				setTasks([newTaskId])
				localStorage.setItem('tasks', JSON.stringify([newTaskId]))
			} else {
				setTasks(s => [...s, newTaskId])
				localStorage.setItem('tasks', JSON.stringify([...tasks, newTaskId]))
			}
			setDeleteAll(true)
			setNewTask('')
			setError(false)
		} else {
			setError(true)
		}
	}

	function deleteTask(id) {
		const newList = tasks.filter((task) => task.id != id)
		localStorage.setItem('tasks', JSON.stringify(newList))
		setError(false)
		setTasks(newList)
		if (newList.length === 0) {
			localStorage.removeItem('tasks')
			setTasks('')
			setDeleteAll(false)
		}
	}

	function deleteAllTasks() {
		localStorage.removeItem('tasks')
		setTasks('')
		setDeleteAll(false)
		setError(false)
	}

	return (
		<div className='container'>
			<Title title={ 'Tasks board' } />
			<div className='inline'>
				<input
					value={ newTask }
					onChange={ (e) => setNewTask(e.target.value) }
					placeholder="New task"
					onKeyDown={ (e) => { e.key === 'Enter' && addTask() } }
				>
				</input>
				<Button handlerClick={ addTask } text={ 'Add task' } />
			</div>
			{ !tasks ? <Subtitle subtitle={ 'Add your first task!' } /> : <Subtitle subtitle={ 'List of tasks:' } /> }
			{ tasks &&
				<ul>
					{ tasks.map((task) => (
						<li key={ task.id } onClick={ () => deleteTask(task.id) }><Task key={ task.id } id={task.id} name={task.name} /></li>
						)
					)}
				</ul>
			}
			{ error && <Notify text={ 'Inserisci un task' } /> }
			{ deleteAll && (<Button handlerClick={ deleteAllTasks } text={ 'Remove all tasks' } style={ 'remove' } />) }
		</div>
	)
}

export default App
