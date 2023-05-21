import React from 'react';
import Image from 'next/image';

import { Container } from './style';

interface CommentCardProps {
    image: any,
    name: string | undefined,
    hora: string | undefined,
    data: string | undefined,
    comment: string | undefined,
}

export const CommentCard: React.FC<CommentCardProps> = ({image, name, hora, data, comment}) => {
    return (
        <Container>
            <header>
                <Image src={image} alt="foto de perfil do usuario" width={36} height={36}/>
                 <p><strong>{name}</strong></p>

                 <div className="hora">
                    <span>{hora}</span>
                    <span>{data}</span>
                 </div>
            </header>
            <div className="content">
                <p>{comment}</p>
            </div>
        </Container>
    );
};
