import React ,{useState} from 'react'

function Photo({onClose}) {
    const[popUp,setPopUp]=useState(null);
    const pop=(src)=>{
        setPopUp(src);}
    const closePopup = () => {
        setPopUp(null); // Clear the popup image
      };
  return (
    <div id="photoModal" className="modal">
        <div className="modal-content background">
            <span className="close" onClick={onClose}>&times;</span>
            <h2> Photos </h2>
            <div className="photos1"> 
            <div className="images"><img srcSet={require("./images/atulyamgrp.jpg")} 
            onClick={()=>pop(require("./images/atulyamgrp.jpg"))}
            alt="abcd"/></div>
            <div className="images"><img srcSet={require("./images/IMG_0353.jpg" )}  
            onClick={()=>pop(require("./images/IMG_0353.jpg"))}
            alt="d"/></div>
            <div className="images"><img srcSet={require("./images/IMG_0358.jpg")}   
            onClick={()=>pop(require("./images/IMG_0358.jpg"))}
            alt="a"/></div>
            <div className="images"><img srcSet={require("./images/flashmob4.png")}  
            onClick={()=>pop(require("./images/flashmob4.png"))}
            alt="ac"/></div>
            <div className="images"><img srcSet={require("./images/flashmob5.png")}  
            onClick={()=>pop(require("./images/flashmob5.png"))}
            alt="ad"/></div>
            </div>
        </div>
        {popUp &&
             <div className="popup">
                <span id="abc" onClick={closePopup}>&times;</span>
                <img srcSet={popUp}  alt="popup"/>
            </div>}
    </div>
     
  )
}

export default Photo
