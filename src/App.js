import React from 'react';
import logo from './logo.svg';
import './App.css';
import CatContainer from './Components/CatContainer';
import { Detector } from "react-detect-offline";


function App() {
  return (
    
    <div className="App">
      <Detector
        render={({ online }) => (
          <CatContainer isOnline={online} ></CatContainer>
        )}
      />
    </div>
  );
}

export default App;
