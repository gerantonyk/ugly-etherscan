import './Block.css';
import { provider } from "../conection";
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

export default function TransactionDetail({hash}) {
  
  let [transaction,setTransaction] = useState({})


  function getTransactionInfo(hash) {
    provider.getTransaction(hash).then(r=>
      setTransaction(r) 
    )
  }

  useEffect( () => {
    getTransactionInfo(hash)
  }, [hash ]);  

  return (
    <>
    {console.log("transaction",transaction)}
      {JSON.stringify(transaction) === '{}' ?(<div>Loading...</div>
      ): (
      <div className="BlockDetail_container">
        <div>
          <label className="Block_Text">Hash:</label> {transaction.hash}
        </div>
        <div>
          <label className="Block_Text">Status:</label> {transaction.blockNumber>=0?"Succes":"Pending"}
        </div>
        <div>
          <label className="Block_Text">From:</label> {transaction.from}
        </div>      
        <div>
          <label className="Block_Text">to:</label> {transaction.to}
        </div> 
        <div>
          <label className="Block_Text">Block:</label> 
          <Link to={`/block/${transaction.blockNumber}`}>{transaction.blockNumber}</Link>
        </div> 
        <div>
          <label className="Block_Text">Confirmations:</label> {transaction.confirmations}
        </div> 
        <div>
          <label className="Block_Text">Gas price:</label> {transaction.gasPrice.toString() }
        </div> 
        <div>
          <label className="Block_Text"> Gas Limit:</label> {transaction.gasLimit.toString()}
        </div> 
        <div>
          <label className="Block_Text"> Type:</label> {transaction.type}
        </div> 
      </div>
    )}
  </>
  )
}

