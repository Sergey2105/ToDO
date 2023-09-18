import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {
	const getValue = () => {
		const storage = localStorage.getItem(key); //string || null

		if (storage) {
			return JSON.parse(storage);// []
		}
		return initialValue
	}

	const [value, setValue] = useState(getValue);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value]);
	return [value, setValue]
	// const useLocalStorage = (key, defaultValue) => {
	// const [value, setValue] = useState(() => {
	// 	let currentValue;
	// 	try {
	// 		currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
	// 	} catch (error) {
	// 		currentValue = defaultValue;
	// 	}
	// 	return currentValue;
	// });

	// useEffect(() => {
	// 	localStorage.setItem(key, JSON.stringify(value));
	// }, [value, key]);

	// return [value, setValue];

	// const [value, setValue] = useState(() => {
	// 	try {
	// 		const localValue = window.localStorage.getItem(key)
	// 		return localValue ? JSON.parse(localValue) : initialValue
	// 	} catch (err) {
	// 		console.log(err)
	// 		return initialValue;
	// 	}
	// });

	// useEffect(() => {
	// 	window.localStorage.setItem(key, JSON.stringify(value))
	// }, [key, value]);

	// return [value, setValue]
}
export default useLocalStorage