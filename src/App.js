import { Button } from 'antd';
import './App.css';
import React, { useState } from 'react';
import TextTag from './Components/TextTag';
import Timer from './Components/Timer';
import SelectColor from './Components/SelectColor';

function App() {
  const [showTextTag, setShowTextTag] = React.useState(false);
  const [showColor, setShowColor] = useState(false);

  const handleTextTag = () => {
    setShowTextTag(!showTextTag);
  }

  const handleColor = () => {
    setShowColor(!showColor)
  }

  return (
    <div className="App">
      <header className="header">
          <p>Welcome to React</p>
      </header>
      <div>
          <Timer/>
          <div className='text-tag'>
              <div>
                 <Button type='primary' onClick={handleTextTag}>Text Tag</Button>
                 {showTextTag && <TextTag/>}
              </div>
          </div>
          <div className='text-tag'>
              <div >
                 <Button type='primary' onClick={handleColor} style={{margin : "10px 0px"}}>Select Color</Button>
                 {showColor && <SelectColor/>}
              </div>
          </div>
      </div>
      <footer>Copyright &copy; {new Date().getFullYear()} | All rights reserved</footer>
    </div>
  );
}

export default App;
