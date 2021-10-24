import { provider } from "../conection";
import React, { useEffect, useState } from "react"
import LatestBlocks from "./LatestBlocks";
import './Home.css';
import LatestTransactions from "./LatestTransactions";


export default function Home() {
  let [latestBlock,setLatestBlock] = useState('')

  function getLatestBlock() {
    provider.getBlockNumber().then(setLatestBlock) 
  }
    
  useEffect( () => {
      getLatestBlock()
  }, []);
  

  return (

    <div>
    {!latestBlock? (
      <div>Loading...</div>
      ) : (
        <div className="Home_container">
          <LatestBlocks latestBlock ={latestBlock} ></LatestBlocks>
          <LatestTransactions latestBlock ={latestBlock} ></LatestTransactions>
        </div>
          )}   
        
    </div>      
  )
}

