import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import Icon from '@mdi/react'; // For music icon
import { mdiMusic, mdiMusicNote } from '@mdi/js'; // Import icons

function Header({ photoModal ,videoModal}) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to control sidebar visibility

  // Toggle function to open/close sidebar
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <div>
      <header>
        <div className="hamburger" onClick={toggleSidebar}>
          <img srcSet={require("./images/more.png")} alt="hamburger icon" />
        </div>

        <img src={require("./images/musiclogo.jpg")} alt="music logo" className="logo" />
        <div className="title">
          <Icon path={mdiMusic} size={2} className='icon' />
          Melo Makers
          <Icon path={mdiMusicNote} size={2} className='icon1' />
        </div>

        <nav>
          <a href="index.html">Home</a>
          <a href="#about" id="aboutLink">About</a>
          <button>
            <a href="https://forms.gle/i8HC4MeT9B6qpC1L9" className="join">Join</a>
          </button>
        </nav>
      </header>

       
      {isSidebarVisible && <Sidebar onClose={toggleSidebar} photoModal={photoModal} videoModal={videoModal}/>}
    </div>
  );
}

export default Header;
