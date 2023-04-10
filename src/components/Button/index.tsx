import { FC } from "react";
import { Container } from "./styles";

interface ButtonInterface {
    text: string,
    onClick?: any,
}

export const Button: FC<ButtonInterface> = ({text, onClick}) => {
    return(
            <Container onClick={onClick}>
                {text}
            </Container>
    );
} 