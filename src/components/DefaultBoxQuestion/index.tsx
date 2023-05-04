import React from 'react';
import { Modal } from './styles';
import Image from 'next/image';

interface DefaultBoxQuestionProps {
    h1?: string,
    strong?: string,
    picture?: any,
    alt?: string,
    children?: any,
    className?: string,
}

export const DefaultBoxQuestion: React.FC<DefaultBoxQuestionProps> = ({className, h1, strong, picture, alt='', children}) => {
    return (
        <Modal className={className}>
           {h1 &&  <h1>
                {h1} <br/>
            <strong>{strong}</strong>
            </h1>}
            {picture && <Image src={picture} alt={alt}/>  }
              {children}    
        </Modal>
    );
};

