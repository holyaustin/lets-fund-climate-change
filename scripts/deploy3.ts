import { ethers, run } from "hardhat";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

async function deployContract(): Promise<string> {
  try {
    // Get deployer account
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    // Get contract factory
    const DappFund = await ethers.getContractFactory("DappFund");

    // Set charity tax percentage (e.g., 5%)
    // const charityTax = 5;

    // Deploy contract
    const contract = await DappFund.deploy();

    // Wait for deployment to complete
    await contract.waitForDeployment();
    const contractAddress = await contract.getAddress(); // ✅ Returns a string

    console.log("✅ DappFund deployed at:", contractAddress);
    return contractAddress;
  } catch (error) {
    console.error("❌ Deployment failed:", error);
    throw error;
  }
}

async function saveContractAddress(address: string): Promise<void> {
  try {
    const output = {
      dappFundContract: address,
    };

    const data = JSON.stringify(output, null, 4);
    const outputPath = join(__dirname, "..", "contracts", "contractAddress.json");

    // Ensure contracts directory exists
    await mkdir(join(__dirname, "..", "contracts"), { recursive: true });

    await writeFile(outputPath, data, "utf8");
    console.log("💾 Contract address saved to:", outputPath);
  } catch (error) {
    console.error("❌ Failed to save contract address:", error);
    throw error;
  }
}

async function main(): Promise<void> {
  try {
    // Deploy contract
    const contractAddress = await deployContract();

    // Save address to JSON
    await saveContractAddress(contractAddress);

    console.log("🎉 Deployment completed successfully.");
  } catch (error) {
    console.error("💥 Critical error:", error);
    process.exitCode = 1;
  }
}

main();