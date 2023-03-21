import s from './suscription.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Suscription = ({ products, btnText }) => {
	
	return (

		<div className={s.content}>
			<div className={s.section_title}>
				<h2 className={s.title_main}>Recorremos Colombia para que descubras</h2>
				<h3 className={s.title_sub}>Nuevos cafés cada mes</h3>
			</div>
			<div className={s.columns}>
				{
					products.map((product, index) => {

						const {categories, slug, description, featured_img, id, main_color, name, price, tags, variations} = product
						const priceNumber = parseInt(price)

						return (
							<div key={index} className={s.product}>
								<div className={s.header}>
									<Image
										className={s.img}
										src={featured_img}
										height={300}
										width={300}
										alt={name}
									/>
									{tags[0] &&
										<span className={s.tag} style={{ backgroundColor: main_color }}>{tags[0]}</span>
									}
								</div>
								<div className={s.body}>
									<div className={s.body_line} style={{backgroundColor:main_color}}>
										<h2 className={s.title}>{name}</h2>
										<h3 className={s.title}>${priceNumber.toLocaleString()}</h3>
									</div>
									<div className={s.description} dangerouslySetInnerHTML={{ __html: description }} />
									<Link className={s.btn_susc} href={`producto/${slug}`}>{btnText}</Link>
								</div>	
							</div>
						)
					})
				}
			</div>
		</div>

	)
}

export default Suscription