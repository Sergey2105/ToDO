import ToDoListItem from "./ToDoListItem"
import styles from '../assets/styles/ToDoList.module.scss'

const ToDoList = (props) => {
	const { filtered, addTaskToStorage, deleteTaskHandler, toggleComplete, editTask } = props
	return (
		<ul className={styles['task-list']}>
			{filtered.map((taskStorage) => (
				<ToDoListItem
					key={taskStorage.id}
					id={taskStorage.id}
					task={taskStorage.text}
					completed={taskStorage.completed}
					addTaskToStorage={addTaskToStorage}
					deleteTaskHandler={deleteTaskHandler}
					toggleComplete={toggleComplete}
					editTask={editTask}
					setChecked={props.setChecked}
					checked={props.checked}
				>
					{taskStorage.task}
				</ToDoListItem>
			))
			}
		</ul >
	)
}

export default ToDoList