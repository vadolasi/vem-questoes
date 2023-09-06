import { useState } from "react"
import { graphql } from "@/gql"
import { useMutation, useQuery } from "urql"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FiPlus } from "react-icons/fi"
import { toast } from "react-toastify"
import { AiOutlineDelete } from "react-icons/ai"

const GetAreasQuery = graphql(/* GraphQL */ `
  query GetAreas {
    areas {
      id
      name
      count
    }
  }
`)

const createCustomSimuladoMutation = graphql(/* GraphQL */ `
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

const schema = z.object({
  name: z.string(),
  areas: z.array(
    z.object({
      areaId: z.string(),
      quantity: z.number()
    })
  )
})

type FormData = z.infer<typeof schema>

interface Props {
  onAdd: () => void
}

const AddSimualdoModal: React.FC<Props> = ({ onAdd }) => {
  const [newSimiladoType, setNewSimuladoType] = useState<"Aleatório" | "Personalizado" | null>(null)
  const [{ data }] = useQuery({ query: GetAreasQuery })
  const [, executeMutation] = useMutation(createCustomSimuladoMutation)
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      areas: []
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "areas"
  })

  const onSubmit = handleSubmit(({ name, areas }) => {
    toast.promise(
      (async () => {
        const { error } = await executeMutation({ areas, name })

        onAdd()

        if (error) {
          throw new Error(error.message)
        }
      })(),
      {
        error: "Ocorreu um erro ao criar o simulado!",
        pending: "Criando simulado",
        success: "Simulado criado com sucesso!"
      }
    )
  })

  const handleSelectChange = (value: string, name: string) => {
    setSelectedOptions(prev => ({ ...prev, [name]: value }))
  }

  const getOptions = (name: string) => {
    return data?.areas.map(area => ({ value: area.id, label: area.name })).filter(
      option => !Object.values(selectedOptions).includes(option.value) || selectedOptions[name] === option.value
    )
  }

  return (
    <form onSubmit={onSubmit}>
      <h1 className="font-medium">Novo simulado</h1>
      <div className="flex flex-col">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Nome</span>
          </label>
          <input type="text" className="input input-sm input-bordered w-full" {...register("name")} />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Tipo</span>
          </label>
          <select className="select select-sm select-bordered w-full" value={newSimiladoType as string} onChange={ev => setNewSimuladoType(ev.currentTarget.value as "Aleatório" | "Personalizado")}>
            <option disabled selected>Selecione um tipo</option>
            <option>Aleatório</option>
            <option>Personalizado</option>
          </select>
        </div>
        {newSimiladoType === "Personalizado" && (
          <div className="my-3 max-h-96 overflow-y-auto">
            <h2>Áreas</h2>
            <div className="flex flex-col gap-2">
              {fields.map(({ id, areaId }, index) => (
                <div key={id} className="flex justify-between gap-1">
                  <select className="select select-sm select-bordered w-full" {...register(`areas.${index}.areaId`, { onChange: ev => handleSelectChange(ev.currentTarget.value, `areas.${index}.areaId`) })}>
                    {(getOptions(`areas.${index}.areaId`) || []).map(({ label, value }) => (
                      <option value={value} key={value}>{label}</option>
                    ))}
                  </select>
                  <input type="number" className="input input-sm input-bordered" {...register(`areas.${index}.quantity`, { valueAsNumber: true, max: data?.areas.find(area => area.id === areaId)?.count || 0 })} max={data?.areas.find(area => area.id === areaId)?.count || 0} />
                  {fields.length - 1 === index ? (
                    <button className="btn btn-outline btn-error btn-square btn-sm" onClick={() => remove(index)}>
                      <AiOutlineDelete />
                    </button>
                  ) : (
                    <div className="w-20 opacity-0" />
                  )}
                </div>
              ))}
            </div>
            {fields.length < (data?.areas.length || 0) && (
              <label
                className="btn btn-sm btn-square btn-secondary mt-3"
                onClick={() => {
                  const areaId = getOptions(`areas.${fields.length}.areaId`)![0].value
                  handleSelectChange(areaId, `areas.${fields.length}.areaId`)
                  append({ areaId, quantity: 1 })}
                }
              >
                <FiPlus />
              </label>
            )}
          </div>
        )}
        <button type="submit" className="btn w-full btn-primary mt-2">Criar</button>
      </div>
    </form>
  )
}

export default AddSimualdoModal
