import React, {useState} from 'react';
import { Container } from './styles';
import {AiOutlineRead, AiOutlineEdit, AiOutlineCheck, AiOutlineDelete} from 'react-icons/ai'

interface NotebookCardProps {
    title: string,
    description: string,
    questions: any[],
    deleteClick?: any,
}

export const NotebookCard: React.FC<NotebookCardProps> = ({title, description, questions, deleteClick}) => {
    const [titleCard, setTitleCard] = useState(title);
    const [descriptionCard, setDescriptionCard] = useState(description);
    const [edit, setEdit] = useState(true);
    
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
