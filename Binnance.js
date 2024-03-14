
const { WebsocketStream } = require('@binance/connector')

console.log("SPot API .");
const logger = new Console({ stdout: process.stdout, stderr: process.stderr })

// define callbacks for different events
const callbacks = {
  open: () => logger.debug('Connected with Websocket server'),
  close: () => logger.debug('Disconnected with Websocket server'),
  message: data => logger.info(data)
}

const websocketStreamClient = new WebsocketStream({ logger, callbacks })
// subscribe ticker stream
websocketStreamClient.ticker('bnbusdt')
// close websocket stream
setTimeout(() => websocketStreamClient.disconnect(), 6000)



/*
const { Spot } = require('@binance/connector')

const apiKey = '7T8DxnXhTFgOmvEfMJ1JuSJ3htx1jUwAC1mdZ6e0KqjI2qaHlibIwgwZFKgPu66G'
const apiSecret = 'aswtRnUe9f2GwnQnNN9oY1nWucIpX0CaH5q6TYzGggq2BnRuGnMc3ZB9swfFMbPD'
const client = new Spot(apiKey, apiSecret)

// Get account information
client.account().then(response => {
                         console.log(response.data);
                         console.log("uid is :",response.data.uid);
                         console.table(response.data.balances);
})

// Place a new order
client.newOrder('BNBUSDT', 'BUY', 'LIMIT', {
  price: '350',
  quantity: 1,
  timeInForce: 'GTC'
}).then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))*/
