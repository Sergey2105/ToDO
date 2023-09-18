import React, { useState, useRef } from "react";
import styles from '../assets/styles/NewToDo.module.scss'
import ErrorModal from "./ErrorModal";

const NewToDO = (props) => {
	const { onAddTask } = props
	const [inputText, setinputText] = useState("");
	const [error, setError] = useState(false)

	const taskInputChangeHandler = (event) => {
		setinputText(event.target.value);
	};
	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (inputText.trim().length === 0) {
			setError(true)
			return;
		}
		setinputText('')
		onAddTask(inputText);
	};
	const errorHandler = () => {
		setError(false)
	}
	return (
		<div className={styles['header']}>
			{error && (<ErrorModal onCloseModal={errorHandler}></ErrorModal>)}
			<div className={styles['font']}>
				<h1>TO-DO NOW</h1>
			</div>
			<div className={styles['line-one']}></div>
			<form className={styles['form']} onSubmit={formSubmitHandler}>
				<div className={styles['input-block']}>
					<div className={styles['input']}>
						<input value={inputText} type='text' onChange={taskInputChangeHandler}></input>
					</div>
					<div className={`${styles['btn-send']} ${styles['font']}`}>
						<button type="submit">Add task</button>
					</div>
				</div>
			</form >
			<div className={styles['line-two']}></div>
		</div >
	)
}

export default NewToDO