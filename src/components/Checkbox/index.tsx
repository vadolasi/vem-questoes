import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Checkbox = ({ label, ...rest }: CheckboxProps) => {
  return (
    <Container>
      <input type="checkbox" id={label} name={label} {...rest} />
      <label htmlFor={label}>{label}</label>
    </Container>
  );
};
