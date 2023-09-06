import React from 'react';
import Image from 'next/image';
import { AiOutlineDelete } from 'react-icons/ai'
import { Container } from './styles'
import { graphql } from '@/gql';
import { useMutation } from 'urql';
import { useRouter } from 'next/navigation';

interface listUserCardProps {
  id: string
  image: any
  name: string
  email: string
  role: string
}

const DeleteuserMutation = graphql(/* GraphQL */`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id)
  }
`)

export const ListUserCard: React.FC<listUserCardProps> = ({ id, image, name, email, role }) => {
  const [, execute] = useMutation(DeleteuserMutation)

  const router = useRouter()

  const deleteUser = async () => {
    await execute({ id })
    router.refresh()
  }

  return (
    <Container>
      <div className='profile'>
        <div className='flex items-center justify-between w-full'>    
        <Image src={image} width={7} height={7} alt={`foto de perfil de ${name}`}/>      
        <button onClick={deleteUser}><AiOutlineDelete/></button>
        </div>
        <p><span className='text-lg text-bold'>Usuário:</span> {name}</p>
        <p><span className='text-lg text-bold'>Email:</span> {email}</p>
        <p><span className='text-lg text-bold'>Posição:</span> {role}</p>
      </div>

    </Container>
  );
};
