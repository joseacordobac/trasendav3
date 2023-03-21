import s from './hero.module.css'
import Image from 'next/image'

const HeroHome = ({ data }) => {

	const { main_imagen, primer_texto_, segundo_texto, texto_resaltado } = data

	return (
		<div className={s.content}>
			<div className={s.grid}>
				<div className={s.title}>
					<Image className={s.logo}
						src='https://trasenda.co/wp-content/uploads/2023/01/logo-trasenda-02.png'
						width={316}
						height={85}
						alt={primer_texto_}
					/>
					<h1 className={s.main__title}>
						{primer_texto_}
						<span className={s.main__subtitle}>{segundo_texto}</span>
					</h1>
					<h2 className={s.second__title}>{texto_resaltado}</h2>
				</div>
				<div className={s.imagen__product}>
					<Image
						src={main_imagen}
						height={250}
						width={450}
						alt={primer_texto_}
						priority
					/>
				</div>
			</div>
		</div>
	)
}

export default HeroHome