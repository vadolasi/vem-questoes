import React from 'react';
import Image from 'next/image';

import { Container, Content } from './styles';

interface DefaultSearchPageProps {
  text: string,
  alt?: string,
  picture?: any,
  content?: boolean,
  children?: any,
  loading?: boolean
}

export const DefaultSearchPage: React.FC<DefaultSearchPageProps> = ({loading, text, picture, alt='', content, children}) => {
  return (
    <Container>
      <h1>{loading ? "Carregando" : text}</h1>
      {
        loading ? (
          <h1>...</h1>
        ) : content ? (
          <Content>
            {children}
          </Content>
        ) : (
          <Image src={picture} alt={alt}/>
        )
      }
    </Container>
  );
};
