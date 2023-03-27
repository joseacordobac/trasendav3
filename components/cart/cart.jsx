import React, {useContext} from 'react';
import cartContext from '@/context/cartContext';
import Image from 'next/image';
import s from '../cart/cart.module.css'
import Link from 'next/link';

const MyCart = () => {

	const { cart, setCart } = useContext(cartContext)
	const { img, slug, title, price, shipping, unidades, total } = cart
	
	const totales = parseInt(shipping) + parseInt(price)
	
	

	return (
		<>
			<div className={s.content}>
				<div className={s.content__product}>
					<ul  className={s.data__product}>
						<li className={s.data__img}>
							<Image
								src={img}
								width={200}
								height={200}
								alt={title}
							/>
						</li>
						<li className={s.data__info}>
							<Link href={'producto/'+slug}>
								<h3 className={s.data__description}>Producto:</h3><h4>{title}</h4>
							</Link>
						</li>
						<li className={s.data__info} >
							<h3 className={s.data__description}>Precio:</h3><h4>{price}</h4>
						</li>
						<li className={s.data__info} >
							<input type='number' value={unidades}></input>
						</li>
						<li className={s.data__info} >
							<h3 className={s.data__description}>SubTotal</h3><h4>{price}</h4>
						</li>
					</ul>
				</div>
				<div className={s.totals}>
					<ul className={s.totals__title}><h2>Total Pedido</h2>
						<li className={s.totals__info}>
							<h3 className={s.totals__description}>Total Pedido</h3><h4>{total}</h4>
						</li>
						<li className={s.totals__info}>
							<h3 className={s.totals__description}>Envio</h3><h4>{shipping}</h4>
						</li>
						<li className={s.totals__info}>Total:{totales}</li>
					</ul>
				</div>
				<button>Realizar pedido</button>
			</div>
		</>
	)

}

export default MyCart