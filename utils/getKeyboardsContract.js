import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x16eA61dD37E52D3e0b26377f528a6591B8fbD59E';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}