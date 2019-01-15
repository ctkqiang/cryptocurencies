/*
Author: John Melody Melissa;
proj: BITCOIN PRICE API
*/
const request = require('request');

function BTC(){
    return new Promise((resolve) => {

        // send a request to blockchain
        request('https://blockchain.info/de/ticker', (error, response, body) => {

            // parse the json answer and get the current bitcoin value
            const data = JSON.parse(body);
            value = (parseInt(data.USD.buy, 10) + parseInt(data.USD.sell, 10)) / 2;
            resolve(value);
        });
    });
}
BTC().then(val => console.log("The Current [BTC] price: " + "USD$ " + val));

// Run this script with NodeJs; --in Terminal
// " node bicoinprice.js "

/* [The JSON File]:

{
  "USD" : {"15m" : 3660.35, "last" : 3660.35, "buy" : 3660.35, "sell" : 3660.35, "symbol" : "$"},
  "AUD" : {"15m" : 5090.5, "last" : 5090.5, "buy" : 5090.5, "sell" : 5090.5, "symbol" : "$"},
  "BRL" : {"15m" : 13568.17, "last" : 13568.17, "buy" : 13568.17, "sell" : 13568.17, "symbol" : "R$"},
  "CAD" : {"15m" : 4857.22, "last" : 4857.22, "buy" : 4857.22, "sell" : 4857.22, "symbol" : "$"},
  "CHF" : {"15m" : 3610.22, "last" : 3610.22, "buy" : 3610.22, "sell" : 3610.22, "symbol" : "CHF"},
  "CLP" : {"15m" : 2467075.75, "last" : 2467075.75, "buy" : 2467075.75, "sell" : 2467075.75, "symbol" : "$"},
  "CNY" : {"15m" : 24749.09, "last" : 24749.09, "buy" : 24749.09, "sell" : 24749.09, "symbol" : "¥"},
  "DKK" : {"15m" : 23913.76, "last" : 23913.76, "buy" : 23913.76, "sell" : 23913.76, "symbol" : "kr"},
  "EUR" : {"15m" : 3206.1, "last" : 3206.1, "buy" : 3206.1, "sell" : 3206.1, "symbol" : "€"},
  "GBP" : {"15m" : 2848.41, "last" : 2848.41, "buy" : 2848.41, "sell" : 2848.41, "symbol" : "£"},
  "HKD" : {"15m" : 28706.51, "last" : 28706.51, "buy" : 28706.51, "sell" : 28706.51, "symbol" : "$"},
  "INR" : {"15m" : 260218.64, "last" : 260218.64, "buy" : 260218.64, "sell" : 260218.64, "symbol" : "₹"},
  "ISK" : {"15m" : 443745.11, "last" : 443745.11, "buy" : 443745.11, "sell" : 443745.11, "symbol" : "kr"},
  "JPY" : {"15m" : 395073.18, "last" : 395073.18, "buy" : 395073.18, "sell" : 395073.18, "symbol" : "¥"},
  "KRW" : {"15m" : 4109730.92, "last" : 4109730.92, "buy" : 4109730.92, "sell" : 4109730.92, "symbol" : "₩"},
  "NZD" : {"15m" : 5371.81, "last" : 5371.81, "buy" : 5371.81, "sell" : 5371.81, "symbol" : "$"},
  "PLN" : {"15m" : 13756.55, "last" : 13756.55, "buy" : 13756.55, "sell" : 13756.55, "symbol" : "zł"},
  "RUB" : {"15m" : 245521.62, "last" : 245521.62, "buy" : 245521.62, "sell" : 245521.62, "symbol" : "RUB"},
  "SEK" : {"15m" : 32805.51, "last" : 32805.51, "buy" : 32805.51, "sell" : 32805.51, "symbol" : "kr"},
  "SGD" : {"15m" : 4957.78, "last" : 4957.78, "buy" : 4957.78, "sell" : 4957.78, "symbol" : "$"},
  "THB" : {"15m" : 116728.55, "last" : 116728.55, "buy" : 116728.55, "sell" : 116728.55, "symbol" : "฿"},
  "TWD" : {"15m" : 112908.15, "last" : 112908.15, "buy" : 112908.15, "sell" : 112908.15, "symbol" : "NT$"}
}

*/
