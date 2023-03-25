import Link from "next/link"
import Image from "next/image"
import s from '../logo/logo.module.css'

const Logo = ({ }) => {

	return (
		<Link href="../">
			<Image
				className={s.logo_imagen}
				src='https://trasenda.co/wp-content/uploads/2023/01/logo-trasenda-02.png'
				width={209}
				height={67}
				alt={'Trasenda Logo'}
				priority
			/>
	</Link>
	)

}

export default Logo