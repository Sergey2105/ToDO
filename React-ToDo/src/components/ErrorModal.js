import styles from '../assets/styles/ErrorModal.module.scss'

const ErrorModal = (props) => {
	return (
		<div>
			<div className={styles['backdrop']} onClick={props.onCloseModal}></div>
			<div className={styles['modal']}>
				<header className={styles['header']}>
					<h2>Ошибка</h2>
				</header>
				<div className={styles['text']}>
					<p>Поле не может быть пустым</p>
				</div>
				<footer className={`${styles['actions']} ${styles['btn-send']}`}>
					<button onClick={props.onCloseModal}>Close</button>
				</footer>
			</div>
		</div>
	)


}
export default ErrorModal