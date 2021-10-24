const ethers = require('ethers');
require('dotenv').config();

const url = process.env['REACT_APP_MAINNET']; 
console.log(url)

const provider = new ethers.providers.JsonRpcProvider(url);

module.exports={provider}

// function setProvider(net) {
//   let envVar = 'REACT_APP_MAINNET'
//   switch (net) {
//     case "Rinkeby":
//       envVar = 'REACT_APP_RINKEBY'
//       break;
//   }
//   const url = process.env[envVar]; 
  
//   return provider = new ethers.providers.JsonRpcProvider(url);
// }