import React, { useState, useEffect } from "react";

import "./timer.css";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }

    if (seconds === 0) setIsRunning(false);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, seconds]);

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
            setSeconds(seconds > 3600 ? seconds - 3600 : 0);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setSeconds(seconds > 60 ? seconds - 60 : 0);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setSeconds(seconds > 1 ? seconds - 1 : 0);
          }}
        >
          -
        </button>
      </div>
      <div className="buttonBox">
        <button onClick={ChangeTimer}>{isRunning ? "stop" : "start"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
