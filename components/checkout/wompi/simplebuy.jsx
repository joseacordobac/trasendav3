
import React, { useContext } from 'react';
import cartContext from '@/context/cartContext';


const SimpleBuy = () => {

	const { cart, setCart } = useContext(cartContext)
	const { img, slug, title, price, shipping, unidades, total } = cart

	let totales = 0
	if (shipping) {
		totales = parseInt(shipping) + parseInt(price)
	}
	

  const wompiPublicKey =  process.env.TEST_WOMPI_KEY_PUBLIC
	const wompiPrivatedKey = process.env.TEST_WOMPI_KEY_SECRET
	
	const wompiCheckoutHtml = '<script src="https://checkout.wompi.co/widget.js" data-render="button" data-public-key="'+wompiPublicKey+'" data-currency="COP" data-amount-in-cents="'+500000+'" data-reference="4XMPGKWWPKWQ"></script >';


	return (
		<div className='content-automatico'>
			<h3>Otros medios de compra</h3>
			<div dangerouslySetInnerHTML={{ __html: wompiCheckoutHtml }} />
		</div>
	)
}

export default SimpleBuy