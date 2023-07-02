import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export const Input = ({ text, ...rest }: InputInterface) => {
  return (
    <Container>
      <input  {...rest} />
      <span>{text}</span>
    </Container>
  );
}
