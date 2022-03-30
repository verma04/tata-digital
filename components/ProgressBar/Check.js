import React, { useState } from 'react';


import ProgressBar from './ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState('');
  const colorArray = ['#7ea9e1'];

  const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  const randomProgressValue = () => {
    const progressValue = Math.floor(Math.random() * 101);

    console.log(progressValue)
    setProgress(progressValue);
    const randomProgressColor = randomColor();
    setColor('#000000');
  }

  const onChange = e => {
    if (e.target.value) {
      if (e.target.value > 100) {
        progress = 100;
      }
      if (e.target.value < 0) {
          progress = 0;
      }
      setProgress(progress);
      const randomProgressColor = randomColor();
      setColor(randomProgressColor);
    } else {
      setProgress(0);
    }
  }

  return (
    <div className="app">
   
        <ProgressBar 
          progress={progress}
          size={200}
          strokeWidth={15}
          circleOneStroke='#d9edfe'
          circleTwoStroke={color}
        />
       
        <button onClick={randomProgressValue}>
          Random
        </button>
      </div>
 
  );
}

export default App;