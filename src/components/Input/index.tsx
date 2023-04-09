import { Container } from "./styles";
import { FC } from "react";

interface InputInterface{
    text: string;
}

export const Input: FC<InputInterface> = ({text}) =>{
    return(
        <Container>
            <input type="text" required/>
            <span>{text}</span>
        </Container>
    );
}