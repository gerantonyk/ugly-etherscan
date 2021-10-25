import './Block.css';
import React, { useEffect, useState,useContext } from "react"
import { EnviromentContext } from '../App';

export default function BlockDetail({blockNumber}) {

  let [block,setBlock] = useState({})
  let {enviroment} = useContext(EnviromentContext);



  useEffect( () => {
    function getBlockInfo(blockNumber) {
      enviroment.getBlock(blockNumber).then(r=>
        setBlock(r) 
      )
    }
      getBlockInfo(parseInt(blockNumber))
  }, [blockNumber,enviroment]);  

  if (block===null) return (<div>Block doesn't exist</div>)
  return (
    <>
      {JSON.stringify(block) === '{}' ?(<div>Loading...</div>
      ): (
      <div className="BlockDetail_container">
        <div>
          <label className="Block_Text">Block:</label> {block.number}
        </div>
          
        <div>
          {Math.floor(Date.now() / 1000) - block.timestamp} segs ago
        </div>
        <div>
          <label className="Block_Text">miner:</label> {block.miner}
        </div>
        <div>
          <label className="Block_Text">nonce:</label> {block.nonce}
        </div>      
        <div>
          <label className="Block_Text">hash:</label> {block.hash}
        </div> 
        <div>
          <label className="Block_Text">parentHash:</label> {block.parentHash}
        </div> 
        <div>
          <label className="Block_Text">difficulty:</label> {block._difficulty.toString()   }
        </div> 
        <div>
          <label className="Block_Text">gasLimit:</label> {block.gasLimit.toString() }
        </div> 
        <div>
          <label className="Block_Text"> gasUsed:</label> {block.gasUsed.toString()}
        </div> 
      </div>
    )}
  </>
  )
}

