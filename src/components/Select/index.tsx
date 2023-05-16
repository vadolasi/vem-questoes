import React from 'react';
import { Container } from './styles';

interface SelectProps {
  options: { value: string, option: string }[],
  label: string,
  value?: any,
  onChange?: any
}

export const Select: React.FC<SelectProps> = ({ options, label, value, onChange }) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <select id={label} value={value} onChange={onChange}>
        <option defaultValue=''></option>

        {options && options.map(({ value, option }) => (
          <option key={value} label={option} value={value}>{option}</option>
        ))}
      </select>
    </Container>
  );
};
