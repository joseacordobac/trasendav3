import s from './product.module.css'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import React, {useContext} from 'react';
import CartContext from '../../context/cartContext';
import Logo from '@/components/logo/logo';

export default function Item({ product }) {

	const [units, setUnits] = useState(1);
	const {setCart} = useContext(CartContext)
	
	const { acf, content, date, id, img, title, slug, product_info: { sku, promo_price, price, variation} } = product
	
	const priceNumber = parseInt(price*units);
	const pricePromo = parseInt(promo_price * units);

	const { register, handleSubmit } = useForm();
	const onSubmit = data => {

		const {unidades, presentacion, total} = data

		setCart({
			id,
			shipping:acf?.costo_total_de_envio,
			title,
			slug,
			img,
			price,
			promo: promo_price,
			total: price*unidades,
			unidades,
			presentacion
		})
		
		window.location = '/carrito';
	};

  return (
		<>
			<div className={s.content}>
				<Logo/>
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
							<input className={s.input_text}
								type="number" {...register("unidades", { min: 1, max: 99 }, { required: true })}
								onChange={(data) => setUnits(data.target.value)}
								value={units}
							/>

							<h3 className={s.form_title}>Elije la presentación</h3>
							<select className={s.selector}
								{...register("presentacion", { required: true }, {message:'Debes seleccionar una presentación'})}
							>	<option
									value=''>Seleccionar una presentación</option>
								{variation.map((options, index) => {
									return (
										<option
											key={index}
											value={options.attributes.attribute_presentacion}>{
											options.attributes.attribute_presentacion
										}</option>
									)
								})}
							</select>
							<div className={s.price}>
								<h3 className={s.regular_price}>
									$ {priceNumber.toLocaleString()}
								</h3>
								{pricePromo.lenght &&
									<>	
										<h3 className={s.promo_price}> $ {pricePromo.toLocaleString()}</h3>
									</>
								}
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