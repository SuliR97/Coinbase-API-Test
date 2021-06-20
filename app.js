const { promisify } = require('util');
const Client = require( "coinbase" ).Client;

const client = new Client({
	 apiKey: '-',
	 apiSecret: '-',
	 strictSSL: false
});

const getSpotPricePromise = promisify(client.getSpotPrice).bind(client);

const currency = 'BTC-USD';
const currency2 ='ETH-USD';
const currency3 ='DOGE-USD';
const currency4 = 'ADA-USD';
const day1 = '2021-06-18';
const day2 = '2021-06-19';
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

		const result3 = await getSpotPricePromise({
			currencyPair: currency2,
			date: day1,
		});
		const price3 = result3.data.amount;

		const result4 = await getSpotPricePromise({
			currencyPair: currency2,
			date: day2,
		});
		const price4 = result4.data.amount;

		const result5 = await getSpotPricePromise({
			currencyPair: currency3,
			date: day1,
		});
		const price5 = result5.data.amount;

		const result6 = await getSpotPricePromise({
			currencyPair: currency3,
			date: day2,
		});
		const price6 = result6.data.amount;

		const result7 = await getSpotPricePromise({
			currencyPair: currency4,
			date: day1,
		});
		const price7 = result7.data.amount;

		const result8 = await getSpotPricePromise({
			currencyPair: currency4,
			date: day2,
		});
		const price8 = result8.data.amount;


		console.log(`Currency: ${currency}`);
		console.log(`Currency: ${currency2}`);
		console.log(`Currency: ${currency3}`);
		console.log(`Currency: ${currency4}`);
		console.log(`BTC Price on ${day1}: ${price1}`);
		console.log(`BTC Price on ${day2}: ${price2}`);
		console.log(`ETH Price on ${day1}: ${price3}`);
		console.log(`ETH Price on ${day2}: ${price4}`);
		console.log(`DOGE Price on ${day1}: ${price5}`);
		console.log(`DOGE Price on ${day2}: ${price6}`);
		console.log(`ADA Price on ${day1}: ${price7}`);
		console.log(`ADA Price on ${day2}: ${price8}`);

		let priceChange = price1 - price2;
		let percentageChange = priceChange/price2

		console.log(`priceChange BTC: ${priceChange}`);
		console.log(`percentageChange BTC: ${(percentageChange.toFixed(2))*100}`);

		let priceChange2 = price3 - price4;
		let percentageChange2 = priceChange2/price4

		console.log(`priceChange ETH: ${priceChange2}`);
		console.log(`percentageChange ETH: ${(percentageChange2.toFixed(2))*100}`);

		let priceChange3 = price5 - price6;
		let percentageChange3 = priceChange3/price6

		console.log(`priceChange DOGE: ${priceChange3}`);
		console.log(`percentageChange DOGE: ${(percentageChange3.toFixed(2))*100}`);

		let priceChange4 = price7 - price8;
		let percentageChange4 = priceChange4/price8

		console.log(`priceChange ADA: ${priceChange4}`);
		console.log(`percentageChange ADA: ${(percentageChange4.toFixed(2))*100}`);

	} catch (err) {
		console.log('err: ', err);
	}
}
main();


