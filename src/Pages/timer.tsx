import React, { useState, useEffect } from "react";

import "./timer.css";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
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
    const totalMinutes = Math.floor(seconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = String(totalHours).padStart(2, "0");
    const minutes = String(totalMinutes % 60).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <div className="Timer">
      <div className="buttonBoxTimer">
        <button
          onClick={() => {
            setSeconds(seconds + 3600);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setSeconds(seconds + 60);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setSeconds(seconds + 1);
          }}
        >
          +
        </button>
      </div>
      <h1>{formatTime(seconds)}</h1>
      <div className="buttonBoxTimer">
        <button
          onClick={() => {
            setSeconds(seconds - 3600);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setSeconds(seconds - 60);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setSeconds(seconds - 1);
          }}
        >
          -
        </button>
      </div>
      <div className="buttonBox">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
