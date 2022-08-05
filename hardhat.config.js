require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/BjQs_w8T5lXdiyziAvlgsVykx2y0hrxf`,
      accounts: ["ddd552ce3bc59fd3c8e3468818d76e99e51d61ecd25d5f36b6609fe2ab00d2e2"]
    }
    
  }

};

