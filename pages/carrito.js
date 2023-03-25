import React, {useContext} from 'react';
import cartContext from '@/context/cartContext';
import Logo from '@/components/logo/logo';

export default function Carrito() {
	
	const { cart, setCart } = useContext(cartContext)
	const { title, price, unidades, total } = cart
	
	const envioCost = 12000;
	const totales = envioCost + parseInt(price)
	console.log(cart, 'carrito')

  return (
		<>
			<Logo/>
			<div>
				<div>
					<ul>
						<li>Producto:{title}</li>
						<li>Precio:{price}</li>
						<li>Unidades:{unidades}</li>
						<li>Subtottal:{total}</li>
					</ul>
				</div>
				<div>
					<ul><h2>Total carrito</h2>
						<li>Subtotal:{total}</li>
						<li>Envío:{envioCost}</li>
						<li>Total:{totales}</li>
					</ul>
				</div>
				<button>Realizar pedido</button>
			</div>
		</>
  )
}

