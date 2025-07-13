# 🌍 lets-fund-climate-change  
**A Web3-powered platform to crowdsource climate action through individual and corporate donations.**

---

## 🔍 Overview  
lets-fund-climate-change is a decentralized application (DApp) designed to address climate change by enabling **transparent, secure, and incentivized donations** to verified environmental projects. Built on blockchain technology, it ensures immutability and accountability while offering rewards like NFT certificates to donors. Deployed on the **UMI DevNet** for testing and development.

---

## 🌱 Mission  
To empower communities and organizations to fund critical climate initiatives such as reforestation, renewable energy, and carbon offset programs, leveraging the transparency of blockchain to build trust and drive collective action.

---

## 🛠️ Technologies Used  
- **Frontend**: React, Tailwind CSS, Ethers.js  
- **Smart Contracts**: Solidity, Hardhat  
- **Blockchain**: UMI DevNet  
- **Storage**: IPFS (for donation certificates/NFTs)  
- **Wallet Integration**: MetaMask  
- **Monitoring**: Etherscan (UMI DevNet explorer)  

---

## 🚀 Features  
### For Individuals  
- Donate cryptocurrency (e.g., UMI tokens) to vetted climate projects.  
- Earn **NFT certificates** as proof of contribution.  
- Track real-time impact metrics (e.g., trees planted, CO₂ offset).  

### For Corporations  
- Bulk donation options with tax deduction certifications.  
- Custom NFT rewards for large contributions.  
- Analytics dashboard to monitor CSR (Corporate Social Responsibility) impact.  

### Admin Panel  
- Approve/reject climate projects.  
- Distribute funds to project owners.  
- Generate impact reports.  

---

## 🧪 Installation & Usage  

### Prerequisites  
- Node.js, npm  
- MetaMask wallet  
- UMI DevNet test tokens  

### Steps  
1. **Clone the repo**:  
   ```bash
   git clone https://github.com/your-username/lets-fund-climate-change.git
   cd lets-fund-climate-change
   ```  

2. **Install dependencies**:  
   ```bash
   npm install
   ```  

3. **Configure environment**:  
   Update `.env` with your UMI DevNet RPC URL and contract addresses:  
   ```env
   VITE_UMI_RPC_URL=your-umi-devnet-rpc
   VITE_CONTRACT_ADDRESS=your-contract-address
   ```  

4. **Run the app**:  
   ```bash
   npm run dev
   ```  

5. **Interact**:  
   - Connect MetaMask to UMI DevNet.  
   - Visit `http://localhost:3000` to donate or manage projects.  

---

## 📦 Smart Contract Deployment  
The DApp is deployed on the **UMI DevNet**. Contract address:  
`0x...` *(Replace with actual address)*  

To deploy updates:  
```bash
npx hardhat run scripts/deploy.js --network umiDevNet
```  

---

## 📝 Contributing  
1. Fork the repo.  
2. Create a feature branch (`git checkout -b feature/ClimateInitiative`).  
3. Commit your changes (`git commit -m "Add NFT metadata"`).  
4. Push to the branch (`git push origin feature/ClimateInitiative`).  
5. Open a pull request.  

---

## 📊 Testing  
Run tests with Hardhat:  
```bash
npx hardhat test
```  

---

## 📄 License  
This project is licensed under the **MIT License**.  

---

## 💬 Contact  
- **Email**: climatefund@umi.org  
- **Twitter**: [@UMIProtocol](https://twitter.com/UMIProtocol)  
- **Discord**: [UMI Developer Community](https://discord.gg/umi)  
- **Live Demo**: [lets-fund-climate-change.vercel.app](https://lets-fund-climate-change.vercel.app)  

---

## 🌐 Why UMI DevNet?  
UMI DevNet provides a scalable, energy-efficient blockchain for testing decentralized solutions. Future plans include mainnet deployment and cross-chain integrations.  

---

## 📌 Notes  
- Use [UMI DevNet Faucet](https://umi.dev/faucet) to get test tokens.  
- All donations on DevNet are simulated; real-world contributions will be enabled on mainnet.  

---

**Together, we can build a greener future. 🌿**  

--- 

Let me know if you'd like to refine any section or add technical details!










# LetsFund: Web3 Social / Consumer DApp on Linea

"letsfund" is a groundbreaking Web3 charity fundraising platform designed to revolutionize the way charitable organizations raise funds and engage with their communities. Deployed on the Linea Sepolia Blockchain, letsfund combines the transparency and security of blockchain technology with an intuitive user experience, allowing both donors and beneficiaries to experience a seamless and trustworthy process. By leveraging decentralized technologies, letsfund aims to minimize overhead costs, enhance donor engagement, and ensure that contributions have a direct and measurable impact.

![Charity Marketplace](./screenshots/letsfund2.png)

Letsfund operates as a decentralized crowdfunding platform dedicated to charitable causes. Whether it's supporting humanitarian projects, funding healthcare initiatives, providing educational resources, or aiding disaster relief efforts, letsfund empowers organizations and individuals to raise funds effectively. The platform assures donors that their contributions are transparent and utilized appropriately, addressing the common concerns regarding the effectiveness of charitable donations.

The `LetsFund.sol` project is a Solidity smart contract that serves as the backbone of a decentralized application (dApp) for charity purposes. It leverages the OpenZeppelin library to ensure secure and standardized development of the contract.

![Charity Marketplace](./screenshots/letsfund3.png)
The contract is designed around two primary structures: CharityStruct and SupportStruct, representing a charity and a supporter, respectively.

## Key features:

- createCharity: Allows a user to create a new charity.
- updateCharity: Allows the charity owner to update the details of an existing charity.
- deleteCharity: Allows the charity owner or contract owner to delete a charity.
- toggleBan: Allows the contract owner to ban or unban a charity.
- donate: Allows a user to donate to a charity.
- changeTax: Allows the contract owner to change the tax percentage.
- getCharity: Returns a single charity by its ID.
- getCharities: Returns all existing charities.
- getMyCharities: Returns all charities created by the caller.
- getSupports: Returns all supporters for a specific charity.

## Running the Application

Supply the following keys in your `.env` variable:

```sh
NEXT_PUBLIC_RPC_URL=http://127.0.0.1:8545
NEXT_PUBLIC_INFURA_API_KEY==<YOUR_INFURA_API_KEYD>
NEXT_PUBLIC_PROJECT_ID=<WALLET_CONNECT_PROJECT_ID>
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=somereallysecretsecret
```

`YOUR_INFURA_API_KEY`: [Get Key Here](https://developer.metamask.io/)
`WALLET_CONNECT_PROJECT_ID`: [Get Key Here](https://cloud.walletconnect.com/sign-in)

Follow these steps to run the application:

1. Install the package modules by running the command: `yarn install`
2. Start the Hardhat server: `yarn blockchain`
3. Run the contract deployment script: `yarn deploy` or `yarn deploy --network linea_sepolia`
4. Run the contract seeding script: `yarn seed`
5. Spin up the Next.js development server: `yarn dev`
Y
Now, your application should be up and running.

Linea_Sepolia contract address = 0x342b41E0F99fb95F1667BC634Ca0872709e6d4b2

## Important Project URLs

- Deployed Contract: https://sepolia.lineascan.build/address/0x342b41E0F99fb95F1667BC634Ca0872709e6d4b2
- Youtube video: https://youtu.be/DrqK19pH5q4
- Live dApp: https://letsfundcharity.vercel.app/
- Github Repo: https://github.com/holyaustin/letsfundcharity

## 📚 Key Technologies

- 🌐 Next.js: A React framework for building server-side rendered and static websites.
- 📘 TypeScript: A statically typed superset of JavaScript.
- 📦 Hardhat: A development environment for Ethereum smart contracts.
- 🌐 EthersJs: A library for interacting with Ethereum and Ethereum-like blockchains.
- 📚 Redux-Toolkit: A library for managing application state.
- 🎨 Tailwind CSS: A utility-first CSS framework.
- 🌈 @rainbow-me/rainbowkit-siwe-next-auth: A library for authentication in Ethereum dApps.
- 📝 React-Toastify: A library for adding toast notifications to your React application.
- 📜 Swiper: A modern mobile touch slider.
- 📚 Wagmi: A library for building Ethereum dApps.

## Useful links

- 🏠 [Linea Sepolia](https://sepolia.lineascan.build/)
- ⚽ [Metamask](https://metamask.io/)
- 💡 [Hardhat](https://hardhat.org/)
- 📈 [Alchemy](https://dashboard.alchemy.com/)
- 🔥 [NextJs](https://nextjs.org/)
- 🎅 [TypeScript](https://www.typescriptlang.org/)
- 🐻 [Solidity](https://soliditylang.org/)
- 👀 [EthersJs](https://docs.ethers.io/v5/)