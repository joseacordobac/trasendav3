import s from './kits.module.css'
import Image from 'next/image'
import Link from 'next/link'

const kits = ({ kits, btnText }) => {

	return (
		<>
			<div className={s.content}>
				<div className={s.section_title}>
					<h2 className={s.title}>Regálate</h2>
					<h3 className={s.subtitle}>uno de nuestros kits cafeteros</h3>
				</div>
				<div className={s.columns}>
					{
						kits.map((kit, index) => {

							const { categories, slug, description, featured_img, id, main_color, name, price, tags, variations } = kit
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
										<h2 className={s.title}>{name}</h2>
										<h3 className={s.title}>${priceNumber.toLocaleString()}</h3>
										<div className={s.description} dangerouslySetInnerHTML={{ __html: description }} />
										<Link className={s.btn_susc} href={`producto/${slug}`}>{btnText}</Link>
									</div>	
								</div>
							)
						})
					}
				</div>
			</div>
		</>
	)
}

export default kits