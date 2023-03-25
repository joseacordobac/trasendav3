import '@/styles/globals.css'
import '../styles/index.css'

import CustomHead from '../components/common/Customhead/CustomHead'
import TopBar from '../components/common/TopBar/TopBar'
import Footer from '@/components/common/footer/footer'
import {CartsContextProvider} from '../context/cartContext'
	
export default function App({ Component, pageProps }) {
	return (
		<>
			<CartsContextProvider>
				<CustomHead title={'Trasenda | Café especial colombiano en la puerta de tu casa'} />
					<TopBar text={'Envío a toda Colombia'} />
				<Component {...pageProps} />
				<Footer/>
			</CartsContextProvider>
			</>
		)
}
