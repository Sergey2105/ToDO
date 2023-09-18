import React, { useRef, useState } from "react";
import styles from '../assets/styles/ToDoListItem.module.scss'


const ToDoListItem = (props) => {
	const { task, id, completed, children, deleteTaskHandler, toggleComplete, editTask } = props


	const [edit, setEdit] = useState(false)
	const [value, setValue] = useState(task);

	const ref = useRef(null)


	const deleteHandler = () => {
		deleteTaskHandler(id);
	};
	const submiteHandler = (event) => {
		event.preventDefault();
		editTask(value, id);
	};

	const startEdit = (edit) => {
		setEdit(active => !active)
		if (!edit)
			ref.current.focus()
		else {
			ref.current.blur()
		}
	};


	return (
		<form className={styles['block-list']} onSubmit={submiteHandler}>
			<input
				ref={ref}
				className={`${styles['list-item']} ${edit && styles['list-item-active']} ${completed && styles['list-item-toggle']}`}
				defaultValue={children}
				readOnly={!edit}
				type="text"
				value={value}
				onChange={
					(event) => setValue(event.target.value)}
			></input>

			<label className={styles['checkbox-complete-label']} htmlFor="checkbox-id">
				<input type="checkbox"
					id="checkbox-id"
					className={styles['checkbox-complete']}
					onClick={() => toggleComplete(id)}
					checked={completed}
					onChange={(e) => props.setChecked(e.target.checked)}
				/>
			</label>
			<button
				className={styles['btn-item']}
				onClick={deleteHandler}>
			</button>
			{
				!edit ? (
					<button
						className={styles['btn-edit']}
						onClick={startEdit}
					></button>
				) : (
					<button
						className={styles['btn-edit-active']}
						onClick={() => {
							(event) => setValue(event.target.value)
							startEdit()
						}}
					></button>
				)
			}
		</form >

	)
}

export default ToDoListItem;