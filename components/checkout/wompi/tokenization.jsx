
const Tokenization = () => {

  const wompiPublicKey =  process.env.TEST_WOMPI_KEY_PUBLIC
  const wompiPrivatedKey = process.env.TEST_WOMPI_KEY_SECRET
	const wompiCheckoutHtml = '<form method="POST" action="/process_token"><script src="https://checkout.wompi.co/widget.js" data-render="button" data-widget-operation="tokenize" data-public-key="'+wompiPublicKey+'"></script></form>';


	return (
		<div className='content-automatico'>
			<h3>Suscripción de compra automatica</h3>
			<div dangerouslySetInnerHTML={{ __html: wompiCheckoutHtml }} />
		</div>
	)
}

export default Tokenization