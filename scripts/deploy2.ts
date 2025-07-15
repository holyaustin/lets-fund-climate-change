import { ethers } from 'hardhat';

async function main() {
  console.log("About to start");
  const charityTax = 5;

  const Counter = await ethers.getContractFactory("DappFund");
  console.log("Getcontract factory successful");

  const counter = await Counter.deploy();
  console.log("Contract tax initialization successful");

  await counter.waitForDeployment();
    console.log("contract deploy successful");
  // Get the generated contract address from the transaction receipt, don't use `await counter.getAddress()`
  const receipt = await ethers.provider.getTransactionReceipt(counter.deploymentTransaction()?.hash!);
  console.log('DappFund is deployed to:', receipt?.contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });