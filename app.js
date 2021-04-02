const { promisify } = require('util');
const Client = require( "coinbase" ).Client;

const client = new Client({
	 apiKey: '-',
	 apiSecret: '-',
	 strictSSL: false
});

const getSpotPricePromise = promisify(client.getSpotPrice).bind(client);

const currency = 'BTC-USD';
const day1 = '2021-03-01';
const day2 = '2021-04-01';

async function main() {
	try {
		// put your logic inside the try block here:

		const result1 = await getSpotPricePromise({
			currencyPair: currency,
			date: day1,
		});

		const price1 = result1.data.amount;

		const result2 = await getSpotPricePromise({
			 currencyPair: currency,
			 date: day2,
		});
	    const price2 = result2.data.amount;


		console.log(`Currency: ${currency}`);

		console.log(`Price on ${day1}: ${price1}`);
		console.log(`Price on ${day2}: ${price2}`);

		let priceChange = price1 - price2;
		let percentageChange = priceChange/price2

		console.log(`priceChange: ${priceChange}`);
		console.log(`percentageChange: ${(percentageChange.toFixed(2))*100}`);

	} catch (err) {
		console.log('err: ', err);
	}
}
main();


