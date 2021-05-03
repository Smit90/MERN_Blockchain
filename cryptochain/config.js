const MINE_RATE = 1000;
const INITAIL_DIFFICULTY = 3

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '-------',
    hash: 'hash-one',
    difficulty: INITAIL_DIFFICULTY,
    nonce: 0,
    data: []
}

const STARTING_BALANCE = 1000;

module.exports = { GENESIS_DATA, MINE_RATE, STARTING_BALANCE }