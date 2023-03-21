import s from './wpbtn.module.css';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const WpBtn = ({ number, text }) => {
	return (
		<>
			<div className={s.content}>
				<Link className={s.linkwhatsapp} href={'https://wa.me/' + number}>
					<WhatsAppIcon className={s.icon}  />
					Escríbenos
				</Link>
			</div>
		</>
	)
}

export default WpBtn