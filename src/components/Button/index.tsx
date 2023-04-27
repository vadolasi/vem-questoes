import { FC } from "react";
import { Container } from "./styles";

import Link from 'next/link';


interface ButtonInterface {
    text: string,
    onClick?: any,
    link?: any,
}

export const Button: FC<ButtonInterface> = ({text, link, onClick}) => {
    return(
            <Container onClick={onClick}>
                <Link href={link}>
                    {text}
                </Link>
                
            </Container>
    );
} 