import React, {useState, useEffect} from 'react';

import { AiOutlineHourglass, AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';

import { Container } from './styles';


interface TimerProps {
    title: string,
}

export const Timer: React.FC<TimerProps> = ({title}) => {
    const [horas, setHoras] = useState<number>(0);
    const [minutos, setMinutos] = useState<number>(0);
    const [segundos, setSegundos] = useState<number>(0);

    const [play, setPlay] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
    
        if (play) {
          intervalId = setInterval(() => {
            setSegundos((segundos) => {
              let newSegundos = segundos + 1;
              let newMinutos = minutos;
              let newHoras = horas;
    
              if (newSegundos >= 60) {
                newSegundos = 0;
                newMinutos += 1;
              }
    
              if (newMinutos >= 60) {
                newMinutos = 0;
                newHoras += 1;
              }
    
              setSegundos(newSegundos);
              setMinutos(newMinutos);
              setHoras(newHoras);
            });
          }, 1000);
        }
    
        return () => {
          clearInterval(intervalId);
        };
      }, [play, segundos, minutos, horas]);

    return (
        <Container>
            <h1>{title}</h1>
            <div className='TimerContainer'>
                <AiOutlineHourglass/>
            <div className='Timer'>
                <span>{horas < 10 ? '0' + horas : horas}:</span>
                <span>{minutos < 10 ? '0' + minutos : minutos}:</span>
                <span>{segundos < 10 ? '0' + segundos : segundos}</span>
            </div>
                <button onClick={() => {setPlay(!play)}}>{play ? <AiOutlinePauseCircle/> : <AiOutlinePlayCircle/>}</button>
            </div>
        
        </Container>
    );
};

