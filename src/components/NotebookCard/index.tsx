import React, {useEffect, useState} from 'react';
import { Container } from './styles';
import {AiOutlineRead, AiOutlineEdit, AiOutlineCheck, AiOutlineDelete} from 'react-icons/ai'
import { graphql } from '@/gql';
import { useMutation } from 'urql';

interface NotebookCardProps {
    title: string,
    description: string,
    questions: any[],
    deleteClick?: any,
}

const updateNotebookMutation = graphql(/* GraphQL */ `
  mutation UpdateNotebook(
    $id: String!
    $name: String
    $description: String
    $questions: [String!]
  ) {
    updateNotebook(
      notebookId: $id
      name: $name
      description: $description
      questions: $questions
    )
  }
`);

export const NotebookCard: React.FC<NotebookCardProps> = ({title, description, questions, deleteClick}) => {
    const [titleCard, setTitleCard] = useState(title);
    const [descriptionCard, setDescriptionCard] = useState(description);
    const [edit, setEdit] = useState(true);
    const [, executeMutation] = useMutation(updateNotebookMutation)

    useEffect(() => {
      if (!edit) {
        executeMutation({  })
      }
    }, [edit])

    return (
        <Container>
            <div className='Titulos'>
                <input type="text" className={edit ? 'title' : 'title edit'} readOnly={edit} value={titleCard} onChange={e => setTitleCard(e.target.value)}/>
                <input type="text" className={edit ? 'description' : 'description edit'} readOnly={edit} value={descriptionCard} onChange={e => setDescriptionCard(e.target.value)}/>
            </div>

            <div className='Questions'>
                <h1>Questões <br/> {questions.length}</h1>
            </div>

            <div className='Buttons'>
                <button><AiOutlineRead/></button>
                <button onClick={() => setEdit(!edit)}> {edit ? <AiOutlineEdit/> : <AiOutlineCheck/> }</button>
                <button onClick={deleteClick}><AiOutlineDelete/></button>
            </div>
        </Container>
    );
};
