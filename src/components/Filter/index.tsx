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
      name
    }
    anos {
      id
      ano
    }
    locais {
      id
      name
    }
    perfis {
      id
      name
    }
    areas {
      id
      name
    }
    subareas {
      id
      name
    }
    estados {
      id
      name
    }
    bancas {
      id
      name
    }
  }
`)

export const Filter: React.FC<FilterProps> = () => {
  const [result] = useQuery({ query: questionsFiltersQuery })

  const { data } = result

  return (
    <Container>
      <SearchInput placeholder='Pesquisar'/>
      <div className='inputs'>
        <div className='Selects'>
          <Select label='Processo seletivo' options={data?.processosSeletivos.map(({ id, name }) => ({ value: id, option: name })) || []}/>
          <Select label='Ano' options={data?.anos.map(({ id, ano }) => ({ value: id, option: ano.toString() })) || []}/>
          <Select label='Local' options={data?.locais.map(({ id, name }) => ({ value: id, option: name })) || []}/>
          <Select label='Perfil' options={data?.perfis.map(({ id, name }) => ({ value: id, option: name })) || []}/>
          <Select label='Area' options={data?.areas.map(({ id, name }) => ({ value: id, option: name })) || []}/>
          <Select label='Subarea' options={data?.subareas.map(({ id, name }) => ({ value: id, option: name })) || []}/>
          <Select label='Estado' options={data?.estados.map(({ id, name }) => ({ value: id, option: name })) || []}/>
          <Select label='Banca' options={data?.bancas.map(({ id, name }) => ({ value: id, option: name })) || []}/>
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
