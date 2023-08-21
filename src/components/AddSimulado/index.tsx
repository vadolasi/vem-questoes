import { useState } from "react"
import { graphql } from "@/gql"
import { useMutation, useQuery } from "urql"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { FiPlus } from "react-icons/fi"

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

function deepEqual(x: any, y: any): any {
  const ok = Object.keys, tx = typeof x, ty = typeof y;
  return x && y && tx === 'object' && tx === ty ? (
    ok(x).length === ok(y).length &&
      ok(x).every(key => deepEqual(x[key], y[key]))
  ) : (x === y);
}

const AddSimualdoModal: React.FC = () => {
  const [newSimiladoType, setNewSimuladoType] = useState<"Aleatório" | "Personalizado" | null>(null)
  /*
  const [areas, setAreas] = useState<{ area: string, quantity: number }[]>(() => {
    const array = Array.from({ length: 100 }, () => ({ area: "", quantity: 1 }))
    array.length = 1
    return array
  });
  */
  const [{ data, fetching }] = useQuery({ query: GetAreasQuery })
  const [, executeMutation] = useMutation(createCustomSimuladoMutation)

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      areas: []
    }
  })

  const { fields, append } = useFieldArray({
    control,
    name: "areas"
  })

  return (
    <div>
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
                  <select className="select select-sm select-bordered w-full" {...register(`areas.${index}.areaId`)}>
                    {data?.areas.filter(area => !(fields.map(area => area.areaId).includes(area.id === areaId ? "" : area.id))).map(area => (
                      <option value={area.id} key={area.id}>{area.name}</option>
                    ))}
                  </select>
                  <input type="number" className="input input-sm input-bordered" {...register(`areas.${index}.quantity`, { max: data?.areas.find(area => area.id === areaId)?.count || 0 })} max={data?.areas.find(area => area.id === areaId)?.count || 0} />
                </div>
              ))}
            </div>
            {fields.length < (data?.areas.length || 0) && (
              <button className="btn btn-sm btn-square btn-secondary mt-3" onClick={() => append({ areaId: data?.areas.filter(area => !(fields.map(area => area.areaId).includes(area.id)))[0].id!, quantity: 1 })}>
                <FiPlus />
              </button>
            )}
          </div>
        )}
        <button className="btn w-full btn-primary mt-2">Criar</button>
      </div>
    </div>
  )
}

export default AddSimualdoModal
