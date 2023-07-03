import React, { useState } from 'react';
import Link from 'next/link';
import {FiX} from 'react-icons/fi'
import {AiOutlineFire, AiOutlineCoffee} from 'react-icons/ai'

import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';


import { Container, ModalWindow } from './styles';
import { graphql } from '@/gql';
import { useMutation, useQuery } from 'urql';
import { SimuladoType } from '@/gql/graphql';
import { useRouter } from 'next/navigation';

interface ModalProps {
  onClick?: any,
  href?: string | undefined,
  className?: string,
  create: boolean
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
  mutation CreateSimulado($name: String!, $areas: [AreaToSimuladoInput!]!) {
    createSimulado(
      name: $name
      type: Custom
      areas: $areas
    ) {
      id
      questions {
        id
      }
    }
  }
`)

export const Modal: React.FC<ModalProps> = ({ onClick, className, create, href}) => {
  const [name, setName] = useState("")
  const [areas, setAreas] = useState<{ area: string, quantity: number }[]>(() => {
    const array = Array.from({ length: 100 }, () => ({ area: "", quantity: 1 }))
    array.length = 1
    return array
  });
  const [getAreasQueryResult] = useQuery({ query: GetAreasQuery })
  const [,executeMutation] = useMutation(createSimuladoMutation)

  const { data, fetching } = getAreasQueryResult

  const router = useRouter()

  const setAreasLength = (length: number) => {
    let newAreas = [...areas]
    if (length - areas.length > 0) {
      newAreas = [...newAreas, ...Array.from({ length: length - areas.length > 0 ? length - areas.length : 0 }, () => ({ area: "", quantity: 1 }))]
    } else {
      newAreas.length = length
    }
    setAreas(newAreas)
  }

  const selecetArea = (index: number, value: string) => {
    const newAreas = [...areas]
    newAreas[index].area = value
    setAreas(newAreas)
  }

  const setQuantity = (index: number, value: number) => {
    const newAreas = [...areas]
    newAreas[index].quantity = value
    setAreas(newAreas)
  }

  const createSimulado = async () => {
    await executeMutation({ areas: areas.map(({ area, quantity }) => ({ areaId: area, quantity })), name })
    router.refresh()
  }

  return (
    <Container className={className}>
      <ModalWindow>
        <button onClick={onClick} className='Close'><FiX/></button>
        {create ?
        <>
          <h1>Crie seu simulado personalizado!</h1>
          <div className='Header'>
            <Input type='text' text='Titulo' value={name} onChange={ev => setName(ev.currentTarget.value)} placeholder='Insira seu Título aqui'/>
        <Select label='Nº de Áreas' options={[{ value: 1, option: "1" }, { value: 2, option: "2" }, { value: 3, option: "3" }, { value: 4, option: "4" }, { value: 5, option: "5" }, { value: 6, option: "6" }, { value: 7, option: "7" }, { value: 8, option: "8" }, { value: 9, option: "9" }]} value={areas.length} onChange={e => setAreasLength(parseInt(e.target.value))}/>
        </div>
          {areas.map(({ area, quantity }, index) => (
            <div className="ExamInfos" key={Math.random()}>
              <Select label='Área' value={area} options={data?.areas!.filter(areaT => !areas.map((area) => area?.area || "").includes(areaT.id) || areaT.id == area).map(area => ({ option: area.name, value: area.id })) || []} onChange={ev => selecetArea(index, ev.currentTarget.value)} />
              <Input type='number' text='Nº de questões' value={quantity} onChange={ev => setQuantity(index, parseInt(ev.currentTarget.value))} min={1} max={30}/>
            </div>
          ))}
            <Button onClick={createSimulado}>Salvar</Button>
        </> :
        <>
          <h1>Executar simulado no modo</h1>
          <div className="RunSimulado">
            <Link className='ButtonSimulado' href={`/simulados/run/raiz?id=${href}`}><AiOutlineFire/>Raiz</Link>
            <Link className='ButtonSimulado' href={`/simulados/run/nutella?id=${href}`}><AiOutlineCoffee/>Nutella</Link>
          </div>
        </>
        }
      </ModalWindow>
    </Container>
  );
};
