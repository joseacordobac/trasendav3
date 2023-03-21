import s from './product.module.css'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import Link from 'next/link'


export default function Item({ product }) {

	const { acf, content, date, id, img, title, slug,
		product_info: { sku, promo_price, price, variation}
	} = product
	
	const priceNumber = parseInt(price);
	const pricePromo = parseInt(promo_price)
	console.log(product)

	const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
		<>
			<div className={s.content}>
				<Link href="../">
					<Image
						className={s.logo_imagen}
						src='https://trasenda.co/wp-content/uploads/2023/01/logo-trasenda-02.png'
						width={309}
						height={77}
					/>
				</Link>
				<h2 className={s.title} style={{ backgroundColor: acf?.main_color }}>{title}</h2>
				<div className={s.grid}>
					<div className={s.left}>
							<Image
							className={s.imagen}
							src={img}
							width={450}
							height={450}
							alt={'Producto'}
						/>
						<div className={s.description} dangerouslySetInnerHTML={{ __html: content }}/>
					</div>
					<div className={s.content_form}>
						<form className={s.form} onSubmit={handleSubmit(onSubmit)}>

							<h3 className={s.form_title}>¿Cuántas bolsas de 250 gr quieres recibir?</h3>
							<input className={s.input_text} type="number" {...register("unidades", { min: 1, max: 99})} />

							<h3 className={s.form_title}>Elije la presentación</h3>
							<select className={s.selector} {...register("presentacion")}>
								{variation.map((options, index) => {
									console.log(options)
									return (
										<option key={index} value={options.attributes.attribute_presentacion}>{options.attributes.attribute_presentacion}</option>
									)
								})}
							</select>
							<div className={s.price}>
								<h3 className={s.regular_price}>$ {priceNumber.toLocaleString()}</h3>
								{pricePromo.lenght && <h3 className={s.promo_price}>$ {pricePromo.toLocaleString()}</h3>}
							</div>
							<input className={s.submit} type="submit" value="Agregar al Carrito"/>
						</form>
					</div>

				</div>
				


			</div>
		</>
  )
}

export async function getServerSideProps({ query: { slug } }) {
			
	const response = await fetch(process.env.NEXT_PUBLIC_URL+'/wp-json/ts/v2/product?slug='+slug[0]);
	const data  = await response.json();

	const product = data[0]

	return {
		props: {
			product
		}
	}
}