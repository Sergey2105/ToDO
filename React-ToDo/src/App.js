import React, { useState, useEffect } from "react";
import NewToDO from "./components/NewToDo";
import ToDoList from "./components/ToDoList";
import useLocalStorage from './assets/hooks/useLocalStorage'
import FilterToDo from "./components/FilterToDo";

function App() {

	const [taskStorage, addTaskStorage] = useLocalStorage('taskStorage', [])
	const [checked, setChecked] = useLocalStorage("Checkbox", false)
	const [filtered, setFiltered] = useState(taskStorage)


	useEffect(() => {
		addTaskStorage(taskStorage)
		setFiltered(taskStorage)
	}, [taskStorage])

	const addTaskHandler = (inputText) => {
		addTaskStorage([...taskStorage, { id: Math.random().toString(), text: inputText, completed: false }]);
	};
	const toggleComplete = (taskId) => {
		addTaskStorage(taskStorage.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task));
	}
	const deleteTaskHandler = (taskId) => {
		addTaskStorage(taskStorage.filter((task) => task.id !== taskId))
	};
	const editTask = (text, taskId) => {
		addTaskStorage(taskStorage.map((task) => task.id === taskId ? { ...task, text } : task));
	};

	const todoFilter = (status) => {
		if (status === 'all') {
			setFiltered(taskStorage)
			console.log(status)
		} else {
			let newTodo = [...taskStorage].filter((task) => task.completed === status)
			console.log(status)
			setFiltered(newTodo)
		}
	}

	return (
		<div>
			<NewToDO
				onAddTask={addTaskHandler}>
			</NewToDO>
			<FilterToDo
				todoFilter={todoFilter}
			/>
			<ToDoList
				deleteTaskHandler={deleteTaskHandler}
				toggleComplete={toggleComplete}
				editTask={editTask}
				taskStorage={taskStorage}
				filtered={filtered}
				checked={checked}
				setChecked={setChecked}
			/>
		</div>
	);
}

export default App;
