import Head from 'next/head'

const CustomHead = ({ children, title }) => {

	return (
		<Head>
			<title>{title}</title>
        <meta name="description" content="Café especial Colombiano en la puerta de tu casa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	)

}

export default CustomHead