import '@/styles/globals.css'
import '../styles/index.css'

import CustomHead from '../components/common/Customhead/CustomHead'
import TopBar from '../components/common/TopBar/TopBar'
import Footer from '@/components/common/footer/footer'

export default function App({ Component, pageProps }) {
	return (
			<>
			<CustomHead title={'Trasenda | Café especial colombiano en la puerta de tu casa'} />
				<TopBar text={'Envío a toda Colombia'} />
			<Component {...pageProps} />
			<Footer/>
			</>
		)
}
