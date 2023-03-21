import HeroHome from '../components/herohome/HeroHome'
import Suscription from '../components/suscription/Suscription'
import WpBtn from '../components/common/WpBtn/WpBtn'
import Kits from '../components/kits/Kits'

export default function Home({ page }) {
	
	const data = page[0].acf
	const suscriptionProduts = page[0].suscription
	const kitsProducts = page[0].kit

  return (
		<>
			<HeroHome data={data} />
			<Suscription products={suscriptionProduts} btnText={'Suscríbete'} />
			<div className='btn-content'>
				<h2 className='btn-title'>¿Quieres saber más de nuestra suscription</h2>
				<WpBtn number={'573187068635'}/>
			</div>
			<Kits kits={kitsProducts} btnText={'Comprar'}/>
		</>
  )
}

export async function getServerSideProps() {
	const response = await fetch('https://trasenda.co/wp-json/ts/v2/home');
	const page  = await response.json();
	
	return {
		props: {
			page
		}
	}
}
