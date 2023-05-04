import React from 'react';
import {FiX} from 'react-icons/fi'

import { Container, ModalWindow } from './styles';

interface ModalProps {
    children: any,
    onClick?: any,
    className?: string,
}

export const Modal: React.FC<ModalProps> = ({children, onClick, className}) => {
    return (
        <Container className={className}>
            <ModalWindow>
                <button onClick={onClick} className='Close'><FiX/></button>
                {children}
            </ModalWindow>  
        </Container>
    );
};
