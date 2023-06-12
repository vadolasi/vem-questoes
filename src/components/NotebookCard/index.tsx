import React, {useEffect, useState} from 'react';
import { Container } from './styles';
import { AiOutlineEdit, AiOutlineCheck, AiOutlineDelete, AiOutlinePlus, AiOutlineMinus, AiOutlineRead} from 'react-icons/ai'
import { graphql } from '@/gql';
import { useMutation } from 'urql';

interface NotebookCardProps {
  id: string
  title: string,
  description: string,
  questions: any[],
  deleteClick?: any,
  add?: boolean,
  addFunction?: () => void,
  removeFunction?: () => void
  edit?: boolean,
  currentQuestion?: string
}

const updateNotebookMutation = graphql(/* GraphQL */ `
  mutation UpdateNotebook($id: String!, $name: String, $description: String, $questions: [String!]) {
    updateNotebook(
      notebookId: $id
      name: $name
      description: $description
      questions: $questions
    )
  }
`);

export const NotebookCard: React.FC<NotebookCardProps> = ({ id, title, description, questions, deleteClick, add, edit, currentQuestion, addFunction, removeFunction }) => {
    const [titleCard, setTitleCard] = useState(title);
    const [descriptionCard, setDescriptionCard] = useState(description);
    const [editing, setEditing] = useState(true);
    const [, executeMutation] = useMutation(updateNotebookMutation)

    useEffect(() => {
      if (titleCard !== title || descriptionCard !== description) {
        executeMutation({ id, name: titleCard, description: descriptionCard })
      }
    }, [editing])

    return (
        <Container>
            <div className='Titulos'>
              <input type="text" className={editing ? 'title' : 'title edit'} readOnly={editing} value={titleCard} onChange={e => setTitleCard(e.target.value)}/>
              <input type="text" className={editing ? 'description' : 'description edit'} readOnly={editing} value={descriptionCard} onChange={e => setDescriptionCard(e.target.value)}/>
            </div>

            <div className='Questions'>
                <h1>Questões <br/> {questions.length}</h1>
            </div>

            <div className='Buttons'>
                {add ? (
                  questions.map(question => question.id).includes(currentQuestion) ? (
                    <button onClick={removeFunction}><AiOutlineMinus/></button>
                  ) : (
                    <button onClick={addFunction}><AiOutlinePlus/></button>
                  )
                ) : (
                  <button><AiOutlineRead/></button>
                )}
                {edit && (
                  <>
                    <button onClick={() => setEditing(!editing)}> {editing ? <AiOutlineEdit/> : <AiOutlineCheck/> }</button>
                    <button onClick={deleteClick}><AiOutlineDelete/></button>
                  </>
                )}
            </div>
        </Container>
    );
};
