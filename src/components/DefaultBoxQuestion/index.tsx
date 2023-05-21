import React from 'react';
import { Modal } from './styles';
import Image from 'next/image';
import { CommentBar } from '../CommentBar';


interface DefaultBoxQuestionProps {
    h1?: string,
    strong?: string,
    picture?: any,
    alt?: string,
    children?: any,
    className?: string,
    content?: boolean,
}

export const DefaultBoxQuestion: React.FC<DefaultBoxQuestionProps> = ({className, h1, strong, picture, alt='', children, content}) => {
    return (
        <Modal className={className}>
            {!content ?
            <>
          { h1 &&  <h1>
                {h1} <br/>
            <strong>{strong}</strong>
            </h1>}
            {picture && <Image src={picture} alt={alt}/>  }
            <CommentBar />
              </>:
              <>
            {children}  
            </>
           } 
        </Modal>
    );
};

