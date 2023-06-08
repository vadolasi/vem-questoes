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
        <Image src={image} width={7} height={7} alt={`foto de perfil de ${name}`}/>
        <p>{name}</p>
        <p>{email}</p>
        <p>{role}</p>
      </div>
      <button onClick={deleteUser}><AiOutlineDelete/></button>
    </Container>
  );
};
