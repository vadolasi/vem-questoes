import Link from "next/link"

const OpenSimulado: React.FC<{ simuladoId: string }> = ({ simuladoId }) => {
  return (
    <div className="flex gap-10">
      <Link href={`/simulados/${simuladoId}?mode=raiz`}>
        Modo raiz
      </Link>
      <Link href={`/simulados/${simuladoId}?mode=nuttela`}>
        Modo nutella
      </Link>
    </div>
  )
}

export default OpenSimulado
