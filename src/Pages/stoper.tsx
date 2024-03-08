import React, { useState, useEffect } from 'react';

import './stoper.css'

const Stoper: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (seconds: number) => {
    let totalMinutes = Math.floor(seconds / 60);
    let totalHours = Math.floor(totalMinutes / 60);
    let hours = String(totalHours).padStart(2, '0');
    let minutes = String(totalMinutes % 60).padStart(2, '0');
    let secs = String(seconds % 60).padStart(2, '0');

    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className='Stoper'>
      <h1>{formatTime(seconds)}</h1>
      <div className='buttonBox'>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Stoper;
