import React, { useEffect, useState,useContext } from "react"
import './LatestBlocks.css';
import Transaction from "./Transaction";
import { EnviromentContext } from "../App";


export default function LatestTransactions({latestBlock}) {
  let [transactions,setTransactions] = useState([])
  let {enviroment} = useContext(EnviromentContext);
  

  useEffect( () => {
    async function getTransactions(latestBlock) {
      const result = await enviroment.getBlockWithTransactions(latestBlock)
      if (result) setTransactions(result.transactions.slice(-10).reverse())
    }    
      getTransactions(latestBlock)
  }, [latestBlock,enviroment]);
  

  return (

    <div>
    
    {/* {console.log('transaciones',transactions)} */}
    {transactions.length===0 || transactions[0]===null ? (
      <div>Loading...</div>
      ) : (
        <div className="LatestBlock_container">
          <h1>Latest Transactions</h1>
          {transactions.map((t,i)=><Transaction
            key = {i}
            transaction = {t}
            >
          </Transaction>)}
          
        </div>
        
        
        
        )}
        
  </div>
        
        
        
  )
}

