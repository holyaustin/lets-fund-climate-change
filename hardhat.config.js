require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

console.log("My private key is", process.env.ACCOUNT_PRIVATE_KEY)

module.exports = {
  defaultNetwork: 'devnet',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    devnet: {
      url: "https://devnet.uminetwork.com",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY]  
    }
  },
  solidity: {
    version: '0.8.28',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
