import React, {useState, useEffect} from 'react';

import { AiOutlineHourglass, AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';

import { Container } from './styles';


interface TimerInverseProps {
    title: string,
    time: number;
}

export const TimerInverse: React.FC<TimerInverseProps> = ({title, time}) => {
  const [seconds, setSeconds] = useState(0); 
  const [isActive, setIsActive] = useState(false);
  const [hours, setHours] = useState(Math.floor(time / 60));
  const [minutes, setMinutes] = useState(time % 60);

  const toggle = () => {
    setIsActive(!isActive);
  };


  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isActive && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (isActive && hours === 0 && minutes === 0 && seconds === 0) {
      setIsActive(false);
    }

    return () => clearInterval(intervalId);
  }, [isActive, minutes, hours, seconds]);

  useEffect(() => {

    if(minutes > 0 && seconds <= 0 && isActive){
      setMinutes(minutes - 1);
      setSeconds(59);
    }
    if(hours > 0 && minutes <= 0 && isActive){
      setHours(hours - 1);
      setMinutes(59);
    }

    }, [isActive, hours, minutes, seconds]);

    return (
        <Container>
            <h1>{title}</h1>
            <div className='TimerContainer'>
                <AiOutlineHourglass/>
            <div className='Timer'>
                <span>{hours.toString().padStart(2, "0")}:</span>
                <span>{minutes.toString().padStart(2, "0")}:</span>
                <span>{seconds.toString().padStart(2, "0")}</span>
            </div>
                <button onClick={toggle}>{isActive ? <AiOutlinePauseCircle/> : <AiOutlinePlayCircle/>}</button>
            </div>
        
        </Container>
    );
};

