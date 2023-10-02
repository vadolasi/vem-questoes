import React, { useEffect } from 'react';
import { TimerInverse } from '../TimerInverse';
import { AiOutlineHourglass, AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai';
import { StopwatchResult, TimerResult, useStopwatch, useTimer } from 'react-timer-hook';

interface TimerProps {
  title: string
  mode: "raiz" | "nutella"
  expiresAt?: Date | null
  setIsRunning: (isRunning: boolean) => void
}

export const Timer: React.FC<TimerProps> = ({ mode, expiresAt, title, setIsRunning }) => {
  const timer = useTimer({ expiryTimestamp: new Date() })
  const stopwatch = useStopwatch()

  let counter: TimerResult | StopwatchResult;

  if (mode === "raiz") {
    counter = timer;
  } else {
    counter = stopwatch;
  }

  const toggle = () => {
    if (counter.isRunning) {
      counter.pause()
      setIsRunning(false)
    } else {
      if (mode === "raiz") {
        (counter as TimerResult).resume()
      } else {
        counter.start()
        setIsRunning(true)
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
      {!counter.isRunning && (
        <div className="alert">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Clique em iniciar para responder às questões!</span>
        </div>
      )}
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
