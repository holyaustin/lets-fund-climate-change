import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@moved/hardhat-plugin';
require('dotenv').config()

console.log("My private key is", process.env.ACCOUNT_PRIVATE_KEY)

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  defaultNetwork: "devnet",
  networks: {
    devnet: {
      // url: "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
      url: "https://devnet.uminetwork.com",
      accounts: [process.env.ACCOUNT_PRIVATE_KEY!]  // Forces TypeScript to treat it as `string
    }
  }
};

export default config;
