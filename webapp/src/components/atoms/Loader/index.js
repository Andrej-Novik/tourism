import loader from "../../../assets/loader.gif"
import styles from './style.module.scss'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<img src={ loader } alt=""/>
		</div>
	)
}
export default Loader