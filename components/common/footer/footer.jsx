import s from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.footer_content}>
				<div className={s.footer_logo}>
					<Link href="../">
						<Image
							className={s.image}
							src={'https://trasenda.co/wp-content/uploads/2023/01/logo-trasenda-02-300x75.png'}
							width={274}
							height={70}
							alt={'Trasenda Logo'}
						/>
					
					<Image
						className={s.logo_wave}
						src={'https://trasenda.co/wp-content/uploads/2023/01/Sitio-escritorio-2-11.png'}
						height={50}
						width={232}
						alt={'Trasenda mark'}
						/>
					</Link>
					</div>
				</div>
		</footer>
	)
}

export default Footer