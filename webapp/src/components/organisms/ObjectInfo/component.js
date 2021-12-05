import style from './style.module.scss'

const ObjectInfo = ({img, name, country, text, rate}) => {
	return (
		<div >
			<p>{img}</p>
			<p>{name}</p>
			<p>{country}</p>
			<p>{text}</p>
			<p>{rate}</p>
		</div>
	)
}

export default ObjectInfo