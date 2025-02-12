import React from 'react';

function Sidebar({ onClose, photoModal,videoModal }) {
  return (
    <div className="sidebar">
      <button className="close1" onClick={onClose}>X</button>
      <img src={require("./images/music club logo 1.webp")} alt='music' className="logo2" />
      <div className="title1">Melo Makers</div>
      <ul className="navlist">
        <li><a className='home' href="index1.html">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="https://forms.gle/i8HC4MeT9B6qpC1L9" className="join1">Join</a></li>
        <li><a href="#gallery" className="dropdown">Gallery</a></li>
        <ul className="nestednav">
          <li><a href='#photo' onClick={photoModal}>Photo</a></li>
          <li><a href="#video"onClick={videoModal}>Video</a></li>
        </ul>
        <li><a href="#contact">Contacts</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
