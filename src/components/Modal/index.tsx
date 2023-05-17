import React, { useState } from 'react';
import {FiX} from 'react-icons/fi'
import {AiOutlineFire, AiOutlineCoffee} from 'react-icons/ai'

import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';


import { Container, ModalWindow } from './styles';
import { graphql } from '@/gql';
import { useMutation, useQuery } from 'urql';

interface ModalProps {
  onClick?: any,
  title?: string,
  className?: string,
  create: boolean,
}

const GetAreasQuery = graphql(/* GraphQL */ `
  query GetAreas {
    areas {
      id
      name
    }
  }
`)

const createSimuladoMutation = graphql(/* GraphQL */ `
  mutation CreateSimulado($name: String!, $type: SimuladoType!, $areas: [AreaToSimuladoInput!]!) {
    createSimulado(
      name: $name
      type: $type
      areas: $areas
    ) {
      id
      questions {
        id
      }
    }
  }
`)

export const Modal: React.FC<ModalProps> = ({ onClick, className, create, title}) => {
    const [matters, setMatter] = useState(1);
    const [getAreasQueryResult] = useQuery({ query: GetAreasQuery })
    const [] = useMutation(createSimuladoMutation)
    const [selectedAreas, setSelectedAreas] = useState<string[]>([])

    const { data, fetching } = getAreasQueryResult

    const selecetArea = (value: string) => {
      const newSelectedAreas = [...selectedAreas, value]
      setSelectedAreas(newSelectedAreas)
    }

    return (
        <Container className={className}>
            <ModalWindow>
                <button onClick={onClick} className='Close'><FiX/></button>
                {create ?
                <>
                  <h1>Crie seu simulado personalizado!</h1>
                  <div className='Header'>
                    <Input type='text' text='Titulo' placeholderText='Insira seu Título aqui'/>
                <Select label='Nº de Áreas' options={[{ value: 1, option: "1" }, { value: 2, option: "2" }, { value: 3, option: "3" }, { value: 4, option: "4" }, { value: 5, option: "5" }, { value: 5, option: "5" }, { value: 6, option: "6" }, { value: 7, option: "7" }, { value: 8, option: "8" }, { value: 9, option: "9" }]} value={matters} onChange={(e: any) => setMatter(e.target.value)}/>
                </div>
                    <div className={matters >= 1 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Área' options={data?.areas!.filter(area => !selectedAreas.includes(area.id)).map(area => ({ option: area.name, value: area.id })) || []} onChange={selecetArea} />
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 2 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Área' options={data?.areas!.filter(area => !selectedAreas.includes(area.id)).map(area => ({ option: area.name, value: area.id })) || []} onChange={selecetArea} />
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 3 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Área' options={data?.areas!.filter(area => !selectedAreas.includes(area.id)).map(area => ({ option: area.name, value: area.id })) || []} onChange={selecetArea} />
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 4 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Área' options={data?.areas!.filter(area => !selectedAreas.includes(area.id)).map(area => ({ option: area.name, value: area.id })) || []} onChange={selecetArea} />
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 5 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Área' options={data?.areas!.filter(area => !selectedAreas.includes(area.id)).map(area => ({ option: area.name, value: area.id })) || []} onChange={selecetArea} />
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 6 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Área' options={data?.areas!.filter(area => !selectedAreas.includes(area.id)).map(area => ({ option: area.name, value: area.id })) || []} onChange={selecetArea} />
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 7 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Área' options={data?.areas!.filter(area => !selectedAreas.includes(area.id)).map(area => ({ option: area.name, value: area.id })) || []} onChange={selecetArea} />
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 8 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Área' options={data?.areas!.filter(area => !selectedAreas.includes(area.id)).map(area => ({ option: area.name, value: area.id })) || []} onChange={selecetArea} />
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 9 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Área' options={data?.areas!.filter(area => !selectedAreas.includes(area.id)).map(area => ({ option: area.name, value: area.id })) || []} onChange={selecetArea} />
                        <Input type='number' text='Nº de questões' min={1} max={10}/>
                    </div>
                    <div className={matters >= 10 ? 'ExamInfos' : 'hidden'}>
                        <Select label='Área' options={data?.areas!.filter(area => !selectedAreas.includes(area.id)).map(area => ({ option: area.name, value: area.id })) || []} onChange={selecetArea} />
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
