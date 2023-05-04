import { Container } from "./styles";
import { FC } from "react";

interface InputInterface{
    text: string;
    placeholderText?: string;
    type: string;
    onChange?: any;
    min?: number,
    max?: number,
}

export const Input: FC<InputInterface> = ({text, placeholderText, type, onChange, min, max}) =>{
    return(
        <Container>
            <input type={type} required placeholder={placeholderText} onChange={onChange} min={min} max={max}/>
            <span>{text}</span>
        </Container>
    );
}