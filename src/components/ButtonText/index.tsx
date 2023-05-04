import { FC } from "react";
import { Container } from "./styles";

interface ButtonTextInterface {
    text: string,
}

export const ButtonText: FC<ButtonTextInterface> = ({text}) => {
    return(
        <Container>
            {text}
        </Container>
    );
}