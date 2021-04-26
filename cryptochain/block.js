const { GENESIS_DATA } = require("./config");

class Block {
    constructor({ timestamp, lasthash, hash, data }) {
        this.timestamp = timestamp;
        this.lasthash = lasthash;
        this.hash = hash;
        this.data = data;
    }

    static genesis() {
        return new Block(GENESIS_DATA)
    }

    static mineBlock({ lastBlock, data }) {
        return new this({
            timestamp: Date.now(),
            lasthash: lastBlock.hash,
            data
        });
    }
}

// const block1 = new Block({ timestamp: '1/1/11', lasthash: 'abdasd', hash: 'asjja', data: 'test' })
// console.log(block1)
module.exports = Block;