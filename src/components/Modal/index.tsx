import React, { useState } from 'react';
import {FiX} from 'react-icons/fi'
import {AiOutlineFire, AiOutlineCoffee} from 'react-icons/ai'

import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';


import { Container, ModalWindow } from './styles';

interface ModalProps {
    onClick?: any,
    title?: string,
    className?: string,
    create: boolean,
}

export const Modal: React.FC<ModalProps> = ({ onClick, className, create, title}) => {
    const [matters, setMatter] = useState(1);
    return (
        <Container className={className}>
            <ModalWindow>
                <button onClick={onClick} className='Close'><FiX/></button>
                {create ? 
                <>
                <h1>Crie seu simulado personalizado!</h1>
                <div className='Header'>
                <Input type='text' text='Titulo' placeholderText='Insira seu Título aqui'/>
                <Select label='Nº de Disciplinas' options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} value={matters} onChange={(e: any) => setMatter(e.target.value)}/>
                </div>
                    <div className={matters >= 1 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Disciplina' options={['nada', 'nadinha']}/>
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 2 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Disciplina' options={['nada', 'nadinha']}/>
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 3 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Disciplina' options={['nada', 'nadinha']}/>
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 4 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Disciplina' options={['nada', 'nadinha']}/>
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 5 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Disciplina' options={['nada', 'nadinha']}/>
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 6 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Disciplina' options={['nada', 'nadinha']}/>
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 7 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Disciplina' options={['nada', 'nadinha']}/>
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 8 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Disciplina' options={['nada', 'nadinha']}/>
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 9 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Disciplina' options={['nada', 'nadinha']}/>
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 10 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Disciplina' options={['nada', 'nadinha']}/>
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <Button text='Criar'/>
                </> : 
                <>
                    <h1>Executar simulado no modo</h1>
                    <div className="RunSimulado">
                        <button className='ButtonSimulado'><AiOutlineFire/>Raiz</button>
                        <button className='ButtonSimulado'><AiOutlineCoffee/>Nutella</button>
                    </div>
                </>
                }
            </ModalWindow>  
        </Container>
    );
};
