import React, {useContext,useState } from "react"
import { EnviromentContext } from '../App';
import { setProvider } from "../conection";

export default function EnviromentSelector()  {
  let {setEnviroment} = useContext(EnviromentContext);
  const [net, setNet] = useState('Mainnet')

  return (
    // <button onClick={() => { 
    //   setNet('Rinkeby')
    //   setEnviroment(setProvider('Rinkeby'))
    //   // console.log('setprovider',setProvider('Rinkeby'))
    //   // console.log('enviroment',enviroment)
    //   }}>
    //   Switch Language (Current: {net})
    // </button>

    <select onChange={(e) => { 
      setNet(e.target.value)
      setEnviroment(setProvider(e.target.value))

      }} value={net}>
    <option id ={0}  value='Mainet'>Mainet</option>
    <option id ={1}  value='Rinkeby'>Rinkeby</option>
    </select>
  );
};