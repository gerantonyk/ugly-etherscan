import { provider } from "../conection";
import React, { useEffect, useState } from "react"
import Block from "./Block";
import './LatestBlocks.css';



export default function LatestBlocks({latestBlock}) {
  let [blocks,setBlocks] = useState([])


  async function getBlocksInfo(latestBlock) {
    let blocksInfo = []
      
    for(let i = latestBlock; i>latestBlock-10;i--) {
      blocksInfo.push(provider.getBlock(i))
    }

    Promise.all(blocksInfo).then(setBlocks)
  }
  useEffect( () => {
    // setInterval(async() => {
      //setBlocks(getBlocksInfo())
    
      getBlocksInfo(latestBlock)
      
    // }, 15000);
  }, [latestBlock]);
  

  return (

    <div>
    
    {console.log('bloques',blocks)}
    {blocks.length===0 ? (
      <div>Loading...</div>
      ) : (
        <div className="LatestBlock_container">
          <h1>Latest Blocks</h1>
          {blocks.map((b,i)=><Block
            key = {i}
            block = {b}
            >
          </Block>)}
          
        </div>
        
        
        
        )}
        
  </div>
        
        
        
  )
}

