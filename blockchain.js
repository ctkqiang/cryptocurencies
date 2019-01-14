/*
Author: John Melody Mel
Blockchain
*/

const SHA256 = require('crypto-js/sha256')
             // npm install --save crypto-js

class Block{
    constructor(index, timestamp, data, previousHash= ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = '';
    }

    calculateHash(){
        return SHA256(this.index = this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [];
    }

    createGenesisBlock(){
        return new Block(0, "01/01/2019", "Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock();
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid(){
        for(let i=1; 1< this.chain.length; i++){
            const currentBlock = this.chain[1];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }

        return true;
    }
}

let johnCoin = new Blockchain();
johnCoin.addBlock(new Block(1, "01/01/2019", {amount: 4}));
johnCoin.addBlock(new Block(2, "02/01/2019", {amount: 10}));

console.log(JSON.stringify(johnCoin, null, 4)); // node blockchain.js
johnCoin.chain[1].data = {amount: 100};
johnCoin.chain[1].hash = johnCoin.chain[1].calculateHash();
console.log("Is this blockchain valid?" + johnCoin.isChainValid());
    //node blockchain.js

    /* OUTPUT:

        {
    "chain": [
        {
            "index": "undefined01/01/2019{\"amount\":4}",
            "timestamp": "01/01/2019",
            "data": {
                "amount": 4
            },
            "hash": "bf5f1f1e45d55835ac85c38eaa95ce2d0c061e3c2d5264e45c40c4f5e953530b"
        },
        {
            "index": "[object Object]02/01/2019{\"amount\":10}",
            "timestamp": "02/01/2019",
            "data": {
                "amount": 10
            },
            "previousHash": {
                "index": "undefined01/01/2019{\"amount\":4}",
                "timestamp": "01/01/2019",
                "data": {
                    "amount": 4
                },
                "hash": "bf5f1f1e45d55835ac85c38eaa95ce2d0c061e3c2d5264e45c40c4f5e953530b"
            },
            "hash": "f426434ace6097591448905e0bc9ea7840c95c9d662b3161617539756ab448f9"
        }
    ]
}
Is this blockchain valid?false

    */
