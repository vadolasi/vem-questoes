import React from 'react';
import { AiOutlineFilter, AiOutlineUndo } from 'react-icons/ai';

import { Container, Fieldset, Button } from './styles';

import { SearchInput } from '../SearchInput';
import { Select } from '../Select';
import { Checkbox } from '../Checkbox'
import { graphql } from '@/gql';
import { useQuery } from 'urql';

interface FilterProps {}

const questionsFiltersQuery = graphql(/* GraphQL */ `
  query QuestionsFilters {
    processosSeletivos {
      id
      nome
    }
    anos {
      id
      ano
    }
    locais {
      id
      nome
    }
    perfis {
      id
      nome
    }
    areas {
      id
      nome
    }
    subareas {
      id
      nome
    }
    estados {
      id
      nome
    }
    bancas {
      id
      nome
    }
  }
`)

export const Filter: React.FC<FilterProps> = () => {
  const [result] = useQuery({ query: questionsFiltersQuery })

  const { data, fetching, error } = result

  return (
    <Container>
      <SearchInput placeholder='Pesquisar'/>
      <div className='inputs'>
        <div className='Selects'>
          <Select label='Processo seletivo' options={data.processosSeletivos.map(({ id, nome }) => ({ value: id, option: nome }))}/>
          <Select label='Ano' options={data.anos.map(({ id, ano }) => ({ value: id, option: ano }))}/>
          <Select label='Local' options={data.locais.map(({ id, nome }) => ({ value: id, option: nome }))}/>
          <Select label='Perfil' options={data.perfis.map(({ id, nome }) => ({ value: id, option: nome }))}/>
          <Select label='Area' options={data.areas.map(({ id, nome }) => ({ value: id, option: nome }))}/>
          <Select label='Subarea' options={data.subareas.map(({ id, nome }) => ({ value: id, option: nome }))}/>
          <Select label='Estado' options={data.estados.map(({ id, nome }) => ({ value: id, option: nome }))}/>
          <Select label='Banca' options={data.bancas.map(({ id, nome }) => ({ value: id, option: nome }))}/>
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
