import { useEffect, useState, useRef } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  return (
    <div>
      HookTimer - {timer}{" "}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
