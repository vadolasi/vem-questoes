import React from 'react';
import Image from 'next/image';
import { AiOutlineDelete } from 'react-icons/ai'
import { Container } from './styles'

interface listUserCardProps {
    image: any,
    name: string,
    email: string,
    role: string,
    onClick: any,
}

export const ListUserCard: React.FC<listUserCardProps> = ({image, name, email, role, onClick}) => {
    return (
        <Container>
            <div className='profile'>
                <Image src={image} alt={`foto de perfil de ${name}`}/>
                <p>{name}</p>
                <p>{email}</p>
                <p>{role}</p>
            </div>
            <button onClick={onClick}><AiOutlineDelete/></button>
        </Container>
    );
};
