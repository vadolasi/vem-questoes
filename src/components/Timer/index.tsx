import React, { useEffect } from 'react';
import { TimerInverse } from '../TimerInverse';
import { AiOutlineHourglass, AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai';
import { StopwatchResult, TimerResult, useStopwatch, useTimer } from 'react-timer-hook';

interface TimerProps {
  title: string
  mode: "raiz" | "nutella"
  expiresAt?: Date | null
}

export const Timer: React.FC<TimerProps> = ({ mode, expiresAt, title }) => {
  const timer = useTimer({ expiryTimestamp: new Date() });
  const stopwatch = useStopwatch();

  let counter: TimerResult | StopwatchResult;

  if (mode === "raiz") {
    counter = timer;
  } else {
    counter = stopwatch;
  }

  const toggle = () => {
    if (counter.isRunning) {
      counter.pause();
    } else {
      if (mode === "raiz") {
        (counter as TimerResult).resume()
      } else {
        counter.start()
      }
    }
  };

  useEffect(() => {
    if (expiresAt) {
      timer.restart(
        expiresAt,
        false
      );
    }
  }, [expiresAt])

  return (
    <TimerInverse>
      <h1>{title}</h1>
      <div className="TimerContainer">
        <AiOutlineHourglass />
        <div className="countdown font-mono font-medium text-5xl">
          {/* @ts-ignore */}
          <span style={{ "--value": counter.hours }}></span>:
          {/* @ts-ignore */}
          <span style={{ "--value": counter.minutes }}></span>:
          {/* @ts-ignore */}
          <span style={{ "--value": counter.seconds }}></span>
        </div>
        <label className="swap">
          <input type="checkbox" checked={counter.isRunning} onChange={toggle} />
          <div className="swap-on"><AiOutlinePauseCircle /></div>
          <div className="swap-off"><AiOutlinePlayCircle /></div>
        </label>
      </div>
    </TimerInverse>
  );
};
