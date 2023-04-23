import React from 'react';
import { Container } from './styles';

interface CheckboxProps {
    label: string
}

export const Checkbox: React.FC<CheckboxProps> = ({label}) => {
    return (
        <Container>
            <input type="checkbox" id={label} name={label}/>
            <label htmlFor={label}>{label}</label>
        </Container>
    );
};
