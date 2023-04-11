import { Container } from "./styles";
import { FC } from "react";

interface InputInterface{
    text: string;
    placeholderText?: string;
    type: string;
    onChange?: any;
}

export const Input: FC<InputInterface> = ({text, placeholderText, type, onChange}) =>{
    return(
        <Container>
            <input type={type} required placeholder={placeholderText} onChange={onChange}/>
            <span>{text}</span>
        </Container>
    );
}