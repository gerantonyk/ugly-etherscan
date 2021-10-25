import React, { useEffect, useState,useContext } from "react"
import LatestBlocks from "./LatestBlocks";
import './Home.css';
import LatestTransactions from "./LatestTransactions";
import { EnviromentContext } from "../App";

export default function Home() {
  let [latestBlock,setLatestBlock] = useState('')
  let {enviroment} = useContext(EnviromentContext);


  useEffect( () => {
    function getLatestBlock() {
      enviroment.getBlockNumber().then(setLatestBlock) 
    }
      
    getLatestBlock()
      
      
  }, [enviroment]);
  

  return (
   
    <div>
    {!latestBlock? (
      <div>Loading...</div>
      ) : (
        <div className="Home_container">
          {/* {console.log('este es el que esta en home',enviroment)}
          {console.log('este es el latest block',latestBlock)} */}
          <LatestBlocks latestBlock ={latestBlock} ></LatestBlocks>
          <LatestTransactions latestBlock ={latestBlock} ></LatestTransactions>
        </div>
          )}   
        
    </div>      
  )
}

