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
