import { useState } from 'react';
import styles from '../assets/styles/FilterToDo.module.scss'

const FilterToDo = (props) => {
	const { todoFilter } = props
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(active => !active)
	};
	return (
		<div className={styles['btn']}>
			<button
				onClick={() => {
					todoFilter('all')
					handleClick()
				}}>Все</button>
			<button onClick={() => todoFilter(false)}>Открытые</button>
			<button onClick={() => todoFilter(true)}>Закрытые</button>
		</div >


	)
}
export default FilterToDo
