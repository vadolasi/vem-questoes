import React from 'react';
import { Container } from './styles';

interface SelectProps {
    options: string[],
    label: string,
    value?: string,
    onChange?: any,

}

export const Select: React.FC<SelectProps> = ({options, label, value, onChange}) => {
    return (
        <Container>
        <label htmlFor={label}>{label}</label>
        <select id={label} value={value} onChange={onChange}>
            <option defaultValue=''></option> 

            {options && options.map((option, index) => (
            <option key={String(index)} label={option} value={option}>{option}</option>
            ))}

        </select>
        </Container>
    );
};
