import { FC, useEffect, useState } from "react";
import { Container } from "./styles";

import Link from 'next/link';


interface ButtonInterface {
    text: string,
    onClick?: any,
    link?: string,
}

export const Button: FC<ButtonInterface> = ({text, link, onClick}) => {
    const [linkText, setLinkText] = useState('')
    
    useEffect(() => {
        link ? setLinkText(link) : setLinkText('');
    }, [])
    return(
            <Container onClick={onClick}>
                <Link href={linkText}>
                    {text}
                </Link>
            </Container>
    );
} 