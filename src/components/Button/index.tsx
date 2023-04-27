import { FC, useEffect, useState } from "react";
import { Container, ButtonTT } from "./styles";

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
    }, [link])
    return( 
            <Container>
                <Link href={linkText}>
                 <ButtonTT onClick={onClick}>
                    {text}
                 </ButtonTT>
                </Link>
            </Container>

    );
} 