import React from 'react';
import { AiOutlineFilter, AiOutlineUndo } from 'react-icons/ai';

import { Container, Fieldset, Button } from './styles';

import { SearchInput } from '../SearchInput';
import { Select } from '../Select';
import { Checkbox } from '../Checkbox'

interface FilterProps {
}

export const Filter: React.FC<FilterProps> = () => {
    const array = ["valor 1", "valor 2"]
    return (
        <Container>
            <SearchInput placeholder='Pesquisar'/>
            <div className='inputs'>
                <div className='Selects'>
                    <Select label='Tipo de processo seletivo' options={array}/>
                    <Select label='Ano' options={array}/>
                    <Select label='Disciplina' options={array}/>
                    <Select label='Prova' options={array}/>
                    <Select label='Banca' options={array}/>
                    <Select label='Assunto' options={array}/>
                </div>

                <Fieldset>
                    <legend>Ocultar Questões</legend>

                    <Checkbox label='Dos cadernos de erros'/>
                    <Checkbox label='Dos meus simulados'/>
                    <Checkbox label='Anuladas'/>
                    <Checkbox label='Desatualizadas'/>
                    
                </Fieldset>
            </div>

            <div className='buttons'>
                <Button className='filter'>
                    <AiOutlineFilter/>
                    Salvar Filtros
                </Button>
                <Button className='reset'>
                    <AiOutlineUndo/>
                    Limpar Filtro
                </Button>
            </div>

        </Container>
    );
};

