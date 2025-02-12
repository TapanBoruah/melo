import React, { useState } from 'react';
import Header from './modals/Header';  
import Photo from './modals/Photo'; 
import Footer from './modals/Footer';
import './App.css';  
import Content from './modals/Content';
import Video from './modals/Video';

function App() {
  const [openPhoto, setOpenPhoto] = useState(false);  
  const[openVideo,setOpenVideo]=useState(false);
 
  function photoModal() {
    setOpenPhoto(!openPhoto);
    if(!openPhoto){
      setOpenVideo(false);
    }
  }
  function videoModal(){
    setOpenVideo(!openVideo);
    if(!openVideo){
      setOpenPhoto(false);
    }
  }

  return (
    <div className='background'>
       
      <Header photoModal={photoModal} videoModal={videoModal}/>
      {openPhoto && <Photo onClose={photoModal} />}
      {!openPhoto && !openVideo && <Content/>}
      {openVideo && <Video onClose={videoModal}/>}
      <Footer/>
    </div>
  );
}

export default App;
