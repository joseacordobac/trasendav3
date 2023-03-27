import Logo from '@/components/logo/logo';
import Tokenization from '@/components/checkout/wompi/tokenization';
import SimpleBuy from '@/components/checkout/wompi/simplebuy';
import MyCart from '@/components/cart/cart';
import UserForm from '@/components/checkout/wompi/userform';

import s from '../styles/carrito.module.css'


export default function Carrito() {
	
  return (
		<>
			<Logo/>
			<div className={s.contents}>
				<div className={s.left}>
					<UserForm/>
				</div>
				<div className={s.right}>
					<MyCart />
					<div className={s.payments_options}>
						<Tokenization />
						<SimpleBuy/>
					</div>
				</div>
			</div>
		</>
  )
}

