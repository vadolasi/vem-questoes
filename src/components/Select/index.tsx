import React from 'react';
import { Container } from './styles';

interface SelectProps {
    options: string[],
    label: string,
}

export const Select: React.FC<SelectProps> = ({options, label}) => {
    return (
        <Container>
        <label htmlFor={label}>{label}</label>
        <select id={label}>
            <option defaultValue=''> </option> 

            {options && options.map((option, index) => (
            <option key={String(index)} label={option} value={option}>{option}</option>
            ))}

        </select>
        </Container>
    );
};
