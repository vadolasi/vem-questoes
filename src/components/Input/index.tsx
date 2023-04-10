import { Container } from "./styles";
import { FC } from "react";

interface InputInterface{
    text: string;
    placeholderText?: string;
    type: string;
}

export const Input: FC<InputInterface> = ({text, placeholderText, type}) =>{
    return(
        <Container>
            <input type={type} required placeholder={placeholderText}/>
            <span>{text}</span>
        </Container>
    );
}