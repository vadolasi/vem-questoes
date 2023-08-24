import Image from "next/image"

import study from '../../assets/table/study.png';
import notebook from '../../assets/table/Notebook.png';
import teste from '../../assets/table/test.png';

import Layout from '@/components/layout';
import Link from 'next/link';

export default function Table() {
  return (
    <Layout page="mesa-de-estudos">
      <div className="flex flex-col lg:flex-row w-full h-full justify-between gap-8 lg:gap-0">
        <div className="flex flex-col gap-8 items-center justify-between p-6 bg-base-200 rounded-3xl border-2 bd-border">
          <p className="font-bold text-2xl">Resolver Questões!</p>
          <Image className="w-52" src={study} alt="Garoto estudando em uma mesa" />
          <Link className="btn btn-primary w-full" href="/banco-de-questoes">Acessar</Link>
        </div>

        <div className="flex flex-col gap-8 items-center justify-between p-6 bg-base-200 rounded-3xl border-2 bd-border">
          <p className="font-bold text-2xl">Meus Cadernos!</p>
          <Image className="w-52" src={notebook} alt="Garota estudando com um caderno aberto" />
          <Link className="btn btn-primary w-full" href="/cadernos">Acessar</Link>
        </div>

        <div className="flex flex-col gap-8 items-center justify-between p-6 bg-base-200 rounded-3xl border-2 bd-border">
          <p className="font-bold text-2xl">Meus Simulados!</p>
          <Image className="w-52" src={teste} alt="Garota resolvendo uma prova" />
          <Link className="btn btn-primary w-full" href="/simulados">Acessar</Link>
        </div>

      </div>
    </Layout >
  )
}



