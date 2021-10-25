const ethers = require('ethers');
require('dotenv').config();

const url = process.env['REACT_APP_MAINNET']; 
console.log(url)

const provider = new ethers.providers.JsonRpcProvider(url);



function setProvider(net) {
  let envVar = 'REACT_APP_MAINNET'
   if (net==="Rinkeby") {
      envVar = 'REACT_APP_RINKEBY'
  }
    let url = process.env[envVar]; 
  
  return new ethers.providers.JsonRpcProvider(url);
}

module.exports={provider,setProvider}