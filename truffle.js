// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      // from: '0x099801bff6bd0e8a02ba366a9e4bd77be1a5104c',
      gas: 1400000
      // gasPrice: 25000000000
    }
  }
}
