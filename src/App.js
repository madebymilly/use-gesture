import React, { useState } from 'react' 
import { useDrag } from '@use-gesture/react'

import Drag from './Drag'
import logo from './logo.svg'

import './App.css';

function App() {
  const [logoPos, setLogoPos] = useState({ x: 0, y: 0 })

  // Create function and set it to variable bindLogoPos
  //const bindLogoPos = useDrag() // add callback with all params (https://use-gesture.netlify.app/docs/state/):
  const bindLogoPos = useDrag((params) => {
    console.log(params)
    setLogoPos({
      x: params.offset[0],
      y: params.offset[1]
    })
    
  })

  return (
    <div className="App">
      <div className="App-header">
        <div {...bindLogoPos()} style={{ position: 'relative', top: logoPos.y, left: logoPos.x }}>
          <img src={logo} className="App-logo" alt="Logo" />
        </div>
      </div>
      <Drag />
      
    </div>
  );
}

export default App;
