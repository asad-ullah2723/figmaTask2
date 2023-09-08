import React, { useState } from 'react'
import ChangeHeart from './ChangeHeart'

export default function C1() {
   
  return (
    <div>
       
      <div style={{backgroundColor:"#e5e5e5", padding:"10px 50px"}}>
        <div>
        <div style={{backgroundColor:"white", padding:"10px", width:"100%", display:"flex", flexDirection:"row"}}>
            <div style={{padding:"10px"}}><img src='pic1.png'/></div>
            <div style={{ padding:"10px"}}>
                <div><b>Maria</b></div>
              <div> <p style={{color:"gray"}}>I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?</p></div> 
                <ChangeHeart/>
                
              </div>

        </div>
        </div>
      </div>
    </div>
  )
}
