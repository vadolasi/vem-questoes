import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"
import { Content } from "../../components/styles/ofertas"
import Layout from "@/components/layout"
import { Button } from "@material-tailwind/react"

interface PromoCard{
  title: string,
  beneficios: number,
  price: number,
}

const PromoCard: React.FC<PromoCard> = ({title, beneficios, price}) => {
return(
  <div className="relative flex flex-col w-[400px] border rounded-md p-7 border-primary">
    <h1 className="absolute w-4/5 p-1 py-3 text-3xl font-bold text-center text-white rounded-full right-8 -top-5 bg-primary">{title}</h1>
    <ul className="flex flex-col gap-3 text-2xl mt-7 text-medium">
      <li className="flex items-center gap-2">{beneficios >= 1 ? <AiOutlineCheck className="text-3xl text-green-800"/> : <AiOutlineClose className="text-3xl text-red-700"/>}Beneficio 1</li>
      <li className="flex items-center gap-2">{beneficios >= 2 ? <AiOutlineCheck className="text-3xl text-green-800"/> : <AiOutlineClose className="text-3xl text-red-700"/>}Beneficio 2</li>
      <li className="flex items-center gap-2">{beneficios >= 3 ? <AiOutlineCheck className="text-3xl text-green-800"/> : <AiOutlineClose className="text-3xl text-red-700"/>}Beneficio 3</li>
      <li className="flex items-center gap-2">{beneficios >= 4 ? <AiOutlineCheck className="text-3xl text-green-800"/> : <AiOutlineClose className="text-3xl text-red-700"/>}Beneficio 4</li>
      <li className="flex items-center gap-2">{beneficios >= 5 ? <AiOutlineCheck className="text-3xl text-green-800"/> : <AiOutlineClose className="text-3xl text-red-700"/>}Beneficio 5</li>
    </ul>
    <h2 className="mt-4 text-2xl font-semibold text-center">R${price},00</h2>
    <Button className="mt-4 bg-primary">Quero este!</Button>
  </div>
)
}
export default function Table() {
  return (
    <Layout page="">
      <div className="flex flex-col items-center justify-between w-full h-full gap-5 xl:gap-0 xl:flex-row">
        <PromoCard title="Básico" beneficios={1} price={50.00}/>
        <PromoCard title="Intermediário" beneficios={3} price={100.00}/>
        <PromoCard title="Completo" beneficios={5} price={200.00}/>
      </div>
    </Layout>
  )
}
