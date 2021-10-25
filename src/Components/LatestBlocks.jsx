import React, { useEffect, useState,useContext } from "react"
import Block from "./Block";
import './LatestBlocks.css';
import { EnviromentContext } from "../App";



export default function LatestBlocks({latestBlock}) {
  let [blocks,setBlocks] = useState([])
  let {enviroment} = useContext(EnviromentContext);
  // console.log("Este es el latest block en Latestbloc",latestBlock)
  // console.log("Este es provider en latestblock",enviroment)
  

  useEffect( () => {
    async function getBlocksInfo(latestBlock) {
      let blocksInfo = []
        
      for(let i = latestBlock; i>latestBlock-10;i--) {
        blocksInfo.push(enviroment.getBlock(i))
      }
  
      const result = await Promise.all(blocksInfo).then(setBlocks)
      if (result) setBlocks(result)
    }
      getBlocksInfo(latestBlock)
      

  }, [latestBlock,enviroment]);
  

  return (

    <div>
{/*     
    {console.log('Estos son los blockes en latest',blocks)} */}
    {blocks.length===0 || blocks[0]===null ? (
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

