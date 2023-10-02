import React, { SelectHTMLAttributes } from "react";
import { Container } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: any; option: string }[];
  label: string;
  blank?: boolean;
}

export const Select = ({
  options,
  label,
  blank = true,
  ...rest
}: SelectProps) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <select id={label} {...rest}>
        {blank && <option defaultValue={undefined} value={undefined}></option>}

        {options &&
          options.map(({ value, option }) => (
            <option key={value} label={option} value={value}>
              {option}
            </option>
          ))}
      </select>
    </Container>
  );
};
