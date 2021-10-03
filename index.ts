require('dotenv').config()

import * as core from "@actions/core";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import { ethers } from "ethers";

const RPC_ENDPOINT = "https://polygon-rpc.com";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/*
 * Simple Aavegotchi Petter ABI
 *
 * https://polygonscan.com/address/0xfa7a3bb12848a7856dd2769cd763310096c053f1
 */
const abi = ["function pet()"];

/*
 * Simple Aavegotchi Petter Contract Deployment on Polygon
 *
 * https://polygonscan.com/address/0xa1cc069caa69ced0e0139201c2eb2d6d24c8f711
 */
const contractAddress = "0xa1cc069caa69ced0e0139201c2eb2d6d24c8f711";

// make sure this contract has permission to pet your gotchi
// use the Aavegotchi facet for call 'setPetOperatorForAll'
// here: https://louper.dev/?address=0x86935F11C86623deC8a25696E1C19a8659CbF95d&network=polygon

console.log(`petting gotchis`);

/*
* Create Ethers contract instance with signer
*/
const provider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINT);

provider.ready.then(async () => {
  try {
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
    
    const gasPrice = await provider.getGasPrice();

    const tx = contract.connect(wallet).pet({
      gasLimit: 100000,
      gasPrice: gasPrice,
    });

    const receipt = await tx.wait();
    console.log(receipt);
  }
  catch (e) {
    console.error(e);
  }

});

