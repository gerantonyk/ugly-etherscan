import React from "react"
import './Block.css';
import { Link } from 'react-router-dom';

export default function Transaction({transaction}) {
  const {hash,from,to} = transaction

  return (
  <div className="Block_container">
    <div className="Block_box1">
      <div>
        <label className="Block_Text">Tx:</label> 
        <Link to={`/transaction/${hash}`}>{hash.slice(0,15)+"..."}</Link>
      </div>
    </div> 

    <div className="Block_box2">
      <div>
        <label className="Block_Text">from:</label> {from}
      </div>
      <div>
        <label className="Block_Text">to:</label> {to}
      </div>
    </div> 
    
  </div>
  )
}

