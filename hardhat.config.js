// Load environment variables from .env
require('dotenv').config();

// Load Hardhat plugins
require('@nomicfoundation/hardhat-toolbox');
require('@moved/hardhat-plugin');

// Log private key (for debugging only—remove in production)
console.log("My private key is", process.env.ACCOUNT_PRIVATE_KEY);

// Hardhat configuration
module.exports = {
  defaultNetwork: "devnet",
  networks: {
    devnet: {
      url: "https://devnet.uminetwork.com",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY], // No need for type casting in JS
      chainId: 42069, // UMI DevNet chain ID
      gas: "auto", 
    },
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
};
