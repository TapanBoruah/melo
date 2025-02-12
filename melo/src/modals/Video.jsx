import React from 'react'

function Video({onClose}) {
  return (
    <div id="videoModal" className="modal">
        <div className="modal-content background">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>Videos</h2>
            <div className="videos1">
                <div className="videos"><video src={require()} playsinline loop controls muted autoplay type="video/MOV"></video></div>
                <div className="videos"><video src={require( )} playsinline loop controls muted autoplay type="video/MOV"></video></div>
                <div className="videos"><video src={require ()} playsinline loop controls muted autoplay type="video/MOV"></video></div>
                <div className="videos"></div>
            </div>
            
        </div>
    </div>
  )
}

export default Video
