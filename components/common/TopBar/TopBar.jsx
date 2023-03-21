import styles from './TopBar.module.css'
import Image from 'next/image'

const TopBar = ({ text }) => {

	return (
		<>
			<div className={styles.upheader}>
				<Image
					src={'https://trasenda.co/wp-content/uploads/2023/01/Sitio-escritorio-2-12-1.png'}
					height='23'
					width='29'
					alt={text}
				/>
				<p className={styles.text}>{text}</p>
			</div>
		</>
	)
}

export default TopBar
