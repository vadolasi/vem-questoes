import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export const Input = ({ text, className, ...rest }: InputInterface) => {
  return (
    <Container>
      <input {...rest} />
      <span className={`${className}`}>{text}</span>
    </Container>
  );
};
