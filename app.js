const { promisify } = require('util');
const Client = require( "coinbase" ).Client;

const client = new Client({
	 apiKey: '-',
	 apiSecret: '-',
	 strictSSL: false
});

const getBuyPricePromise = promisify(client.getBuyPrice).bind(client);

const currencies = ['BTC-USD', 'ETH-USD'];

async function main() {
	try {
		// put your logic inside the try block here:

		const loadPriceRequests = currencies.map(currency => getBuyPricePromise({ currencyPair: currency }));
		const results = await Promise.all(loadPriceRequests);

		results.forEach((result, i) => {
			console.log(`Currency: ${currencies[i]}`);
			console.log(`Total Amount: ${result.data.amount}\n`);
		});

	} catch (err) {
		console.log('err: ', err);
	}
}
main();


