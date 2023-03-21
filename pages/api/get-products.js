const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3"
});

export default async function handler(req, res) {
	const responseData = {
		success: false, 
		product:[]
	}

	const {perPage, slug} =  req?.query ?? {}
	

	try {
		const { data } = await api.get(
			'products',
			{
				per_page: perPage || 50,
				slug: slug
			}
		);
		responseData.success = true;
		responseData.product = data;

		res.json(responseData)

	} catch (error) {
		responseData.error = error.message;
		res.status(500).json(responseData)
	}

}