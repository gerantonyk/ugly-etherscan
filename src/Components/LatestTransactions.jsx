import { provider } from "../conection";
import React, { useEffect, useState } from "react"
import './LatestBlocks.css';
import Transaction from "./Transaction";


export default function LatestTransactions({latestBlock}) {
  let [transactions,setTransactions] = useState([])

  async function getTransactions(latestBlock) {
    provider.getBlockWithTransactions(latestBlock).then(r=>setTransactions(r.transactions.slice(-10).reverse()))
  }
  useEffect( () => {
      getTransactions(latestBlock)
  }, [latestBlock]);
  

  return (

    <div>
    
    {console.log('transaciones',transactions)}
    {transactions.length===0 ? (
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

