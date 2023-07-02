import React, {useState, useEffect, ReactNode} from 'react';


import { Container } from './styles';


interface TimerInverseProps {
  children: ReactNode,
}

export const TimerInverse: React.FC<TimerInverseProps> = ({children}) => {


    return (
        <Container>

          {children}
        </Container>
    );
};

