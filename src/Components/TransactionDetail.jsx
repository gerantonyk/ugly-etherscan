import './Block.css';
import React, { useEffect, useState,useContext } from "react"
import { Link } from 'react-router-dom';
import { EnviromentContext } from '../App';

export default function TransactionDetail({hash}) {

  let [transaction,setTransaction] = useState({})
  let {enviroment} = useContext(EnviromentContext);



  useEffect( () => {
    function getTransactionInfo(hash) {
      enviroment.getTransaction(hash).then(r=>
        setTransaction(r) 
      )
    }
    getTransactionInfo(hash)
  }, [hash,enviroment]);  

  if (transaction===null) return (<div>Transaction doesn't exist</div>)

  return (
    <>
    {/* {console.log("transaction",transaction)} */}
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
        <div>
          <label className="Block_Text"> Value:</label> {transaction.value.toString()}
        </div>         
      </div>
    )}
  </>
  )
}

