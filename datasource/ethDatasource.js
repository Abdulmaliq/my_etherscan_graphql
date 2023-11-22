const { RESTDataSource } = require("apollo-datasource-rest"); 

// Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Etherscan data source class
class EthDatasource {

  constructor() {
    super();
    
    // Base URL for Etherscan API 
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Get ether balance for a given address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Get total ether supply
  async totalSupplyOfEther() {
    return this.get(  
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }


  // Get latest Ethereum price
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}` 
    );
  }

  // Get average block confirmation time
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
