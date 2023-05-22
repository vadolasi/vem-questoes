import React, {useState} from 'react';
import { Container } from './styles';
import {AiOutlinePlaySquare, AiOutlineDelete} from 'react-icons/ai'

interface ExamBarProps {
    title: string,
    questions: number,
    deleteClick?: any,
    onClick?: any,
}

export const ExamBar: React.FC<ExamBarProps> = ({title, questions, deleteClick, onClick}) => {
    const [titleCard, setTitleCard] = useState(title);

    return (
        <Container>
            <div className='Titulos'>
                <input type="text" className={'title'} readOnly={true} value={titleCard}/>
            </div>

            <div className='Questions'>
                <h1>Questões <br/> {questions}</h1>
            </div>

            <div className='Buttons'>
                <button onClick={onClick}><AiOutlinePlaySquare/></button>
                <button onClick={deleteClick}><AiOutlineDelete/></button>
            </div>
        </Container>
    );
};
