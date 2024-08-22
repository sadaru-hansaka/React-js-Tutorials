import './App.css';
import React from 'react';
import Images from './component/Images';
import ReactPlayer from 'react-player';
import React_player from './component/React_player';
import Music from './component/PlayMusic';

function App() {
  
  return (
    <div>
      <Images />
      <br/>
      <React_player/>
      <br/>
      <Music />
    </div>
  );
}

export default App;
