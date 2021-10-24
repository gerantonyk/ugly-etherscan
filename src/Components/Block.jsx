import React from "react"
import './Block.css';
import { Link } from 'react-router-dom';

export default function Block({block}) {
  const {number,timestamp,miner,transactions} = block

  return (
  <div className="Block_container">
    <div className="Block_box1">
      <div>
        <label className="Block_Text">Block:</label> 
        <Link to={`/block/${number}`}>{number}</Link>
      </div>
        
      <div>
        {Math.floor(Date.now() / 1000) - timestamp} segs ago
      </div>
    </div> 

    <div className="Block_box2">
      <div>
        <label className="Block_Text">miner:</label> {miner}
      </div>
      <div>
        <label className="Block_Text">transactions:</label> {transactions.length}
      </div>
    </div> 
    
  </div>
  )
}

