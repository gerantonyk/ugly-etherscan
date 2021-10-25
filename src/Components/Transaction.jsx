import React from "react"
import './Transaction.css';
import { Link } from 'react-router-dom';

export default function Transaction({transaction}) {
  const {hash,from,to} = transaction

  return (
  <div className="Transaction_container">
    <div className="Transaction_box1">
      <div>
        <label className="Transaction_Text">Tx:</label> 
        <Link to={`/transaction/${hash}`}>{hash.slice(0,15)+"..."}</Link>
      </div>
    </div> 

    <div className="Transaction_box2">
      <div>
        <label className="Transaction_Text">from:</label> {from}
      </div>
      <div>
        <label className="Transaction_Text">to:</label> {to}
      </div>
    </div> 
    
  </div>
  )
}

