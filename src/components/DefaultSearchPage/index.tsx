import React from 'react';
import Image from 'next/image';

import { Container, Content } from './styles';

interface DefaultSearchPageProps {
    text: string,
    alt?: string,
    picture?: any,
    content?: boolean,
    children?: any,
}

export const DefaultSearchPage: React.FC<DefaultSearchPageProps> = ({text, picture, alt='', content, children}) => {
    return (
        <Container>
            <h1>{text}</h1>
           
           {content ? 
           <Content>
            {children}
           </Content> :
            <Image src={picture} alt={alt}/>
           }
        </Container>
    );
};
