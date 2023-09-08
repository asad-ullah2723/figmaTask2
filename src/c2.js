import React, { useState } from 'react'

export default function C2() {
    const [reply, setReply] = useState(false); 
    const [comment, setComment] = useState(false); 
    // const [remove, setRemove] = useState(true); 
  
  
    const replyClick = () => {
      setReply(true);
    };
    const commentClick = () => {
      setComment(true);
    };
    const removeButton = () => {
      setComment(false);
    };
    const [state, setState] = useState(0);
  
    const changeHeartImage = () => {
      if (state === 1) {
        setState(0);
      } else {
        setState(1);
      }
    };
  
    const bulbImageSrc = state === 1
      ? "heart1.png"
      : "heart2.png";
      const [state2, setState2] = useState(0);
  
    const changeHeartImage2 = () => {
      if (state2 === 1) {
        setState2(0);
      } else {
        setState2(1);
      }
    };
  
    const bulbImageSrc2 = state2 === 1
      ? "heart1.png"
      : "heart2.png";
  
    return (
        <div>
       
        <div style={{backgroundColor:"#e5e5e5", padding:"10px 50px"}}>
          <div>
          <div style={{backgroundColor:"white", padding:"10px", width:"100%", display:"flex", flexDirection:"row"}}>
              <div style={{padding:"10px"}}><img src='pic2.png'/></div>
              <div style={{padding:"10px"}}>
                  <div><b>Tania</b></div>
                <div> <p style={{color:"gray"}}>Home sweet home! I’m glad you are back. It’s been two year and miss the football matches we have together. A lot has been changed since you left. Let’s meet at the ground tomorrow evening? </p></div> 
      <div style={{display:"flex", flexDirection:"column"}}>
      <div style={{display:"flex", flexDirection:"row"}}>
        <div><a style={{cursor:"pointer"}} onClick={ changeHeartImage}><img id="bulbImg" src={bulbImageSrc} alt="Bulb" /></a></div>
        <div>&nbsp;{state}</div>
        <div style={{padding:"0px 10px"}} >&nbsp;<b>.</b>&nbsp;</div>
        <div style={{cursor:"pointer", color:"blue"}} onClick={replyClick}>Reply</div></div>
        {comment
  && 
  <div style={{backgroundColor:"white", padding:"10px", display:"flex", flexDirection:"row", width:"100%"}}>
              <div style={{padding:"10px"}}><img src='pic4.jpg'/></div>
              <div style={{padding:"10px"}}>
                  <div><b>John Doe</b></div>
                <div> <p style={{color:"gray"}}>Old rivalry! Consider me in ;-)</p></div> 
                <div style={{display:"flex", flexDirection:"row"}}>
                <div><a style={{cursor:"pointer"}} onClick={ changeHeartImage2}><img id="bulbImg" src={bulbImageSrc2} alt="Bulb" /></a></div>
        <div>&nbsp;{state2}</div>
                  <div style={{padding:"0px 10px"}} >&nbsp;<b>.</b>&nbsp;</div>
                  <div style={{color:"red",cursor:"pointer"}} ><a onClick={removeButton}>Remove</a></div></div>
                </div>
  
          </div>
          
          }
        {reply && <div style={{background:"#F8F9FB", display:"flex", flexDirection:"row", justifyContent:"space-between",cursor:"pointer", margin:"45px 0px 0px -15px", padding:"12px", width:"100%"}} onClick={commentClick}><div style={{color:"rgb(195 195 197)"}} >Write Your Comment</div><div><img src='send.png'/></div></div>
  }
  
  
    
      </div>
      </div>

</div>
</div>
</div>
</div>
    );

}