import React, { useState, useEffect } from "react";

import "./stoper.css";

const Stoper: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const ChangeTimer = () => {
    isRunning ? setIsRunning(false) : setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = (seconds: number) => {
    const totalMinutes = Math.floor(seconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = String(totalHours).padStart(2, "0");
    const minutes = String(totalMinutes % 60).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className="Stoper">
      <h1>{formatTime(seconds)}</h1>
      <div className="buttonBox">
        <button onClick={ChangeTimer}>{isRunning ? "stop" : "start"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Stoper;
