const Client = require( "coinbase" ).Client;

const client = new Client({
	 apiKey: '',
	 apiSecret: '',
	 strictSSL: false
});

client.getBuyPrice({ currencyPair: 'BTC-USD'}, function(err, obj) {
	if (err) console.log('error: ' + err);
	console.log('total amount: ' + obj.data.amount);
});
