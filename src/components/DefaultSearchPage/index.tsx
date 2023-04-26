import React from 'react';
import Image from 'next/image';

import { Container } from './styles';

interface DefaultSearchPageProps {
    text: string,
    alt: string,
    picture: any,
}

export const DefaultSearchPage: React.FC<DefaultSearchPageProps> = ({text, picture, alt}) => {
    return (
        <Container>
            <h1>{text}</h1>
            <Image src={picture} alt={alt}/>
        </Container>
    );
};
