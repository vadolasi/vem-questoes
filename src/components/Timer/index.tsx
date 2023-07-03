import React, {useState, useEffect, ReactNode} from 'react';

import { AiOutlineHourglass, AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';

import { Container } from './styles';


interface TimerProps {
    children: ReactNode,
}

export const Timer: React.FC<TimerProps> = ({children}) => {
    
    return (
        <Container>
            {children}
        
        </Container>
    );
};

