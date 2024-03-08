import { useState, useEffect } from "react";

import "./clock.css";

const Clock = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setInterval(() => {
      const dateObject = new Date();

      setTime(
        FormatTime(dateObject.getHours()) +
          " : " +
          FormatTime(dateObject.getMinutes()) +
          " : " +
          FormatTime(dateObject.getSeconds())
      );
    }, 1000);
  }, []);

  const FormatTime = (number: number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  return (
    <div className="clock">
      <h1>{time}</h1>
    </div>
  );
};

export default Clock;
