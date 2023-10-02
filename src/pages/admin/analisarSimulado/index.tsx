import AdminLayout from "@/components/adminLayout";
import { Page } from "@/components/styles/questao";
import { PiStudent } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useModal } from "@/components/Modal";

export default function Analises() {
  const simulados = [
    {
      nome: "Simulado 1",
      materia: "Matemática",
      totalQuestao: 20,
      totalAlunos: 100,
    },
    {
      nome: "Simulado 2",
      materia: "Português",
      totalQuestao: 30,
      totalAlunos: 80,
    },
    {
      nome: "Simulado 3",
      materia: "Ciências",
      totalQuestao: 25,
      totalAlunos: 120,
    },
  ];
  const totalQuestoes = 20;
  const [alunoModal] = useModal(<StudentsModal />);
  const alunos = [
    {
      nome: "Aluno 1",
      totalQuestoes: totalQuestoes,
      totalQuestoesCorretas: 15,
    },
    {
      nome: "Aluno 2",
      totalQuestoes: totalQuestoes,
      totalQuestoesCorretas: 18,
    },
    {
      nome: "Aluno 3",
      totalQuestoes: totalQuestoes,
      totalQuestoesCorretas: 14,
    },
  ];
  function CardSimulado({ nome, materia, totalQuestao, totalAlunos }: any) {
    return (
      <div
        className="grid items-center justify-between grid-cols-4 p-2 text-lg font-semibold border rounded hover:text-white border-primary bg-base-200 hover:cursor-pointer hover:bg-accent"
        onClick={alunoModal}
      >
        <p>{nome}</p>
        <p>{materia}</p>
        <p className="flex items-center">
          <AiOutlineQuestionCircle className="text-primary" />
          {totalQuestao}
        </p>
        <p className="flex items-center">
          <PiStudent className="text-primary" />
          {totalAlunos}
        </p>
      </div>
    );
  }
  function StudentsModal() {
    return (
      <>
        <div className="grid items-center justify-between grid-flow-row grid-cols-2 text-xl font-bold">
          <p>Alunos</p>
          <p>Aproveitamento</p>
        </div>
        {alunos.map((aluno) => {
          <div
            className="grid items-center justify-between grid-flow-row grid-cols-2 border-b border-b-black/30"
            key={aluno.nome}
          >
            <p>{aluno.nome}</p>
            <p>
              {((aluno.totalQuestoesCorretas / totalQuestoes) * 100).toFixed(2)}
              %
            </p>
          </div>;
        })}
      </>
    );
  }
  return (
    <AdminLayout page="análises">
      <Page className="w-[400px] xl:w-[750px]">
        <header>
          <h1>Analise dos simulados</h1>
          <p>Analise os simulados dos usuários</p>
        </header>

        <div className="flex flex-col gap-1 w-full h-[500px] p-3 bg-base-200 border-2 border-primary rounded">
          {simulados.map((simulado) => (
            <CardSimulado
              key={simulado.nome}
              nome={simulado.nome}
              materia={simulado.materia}
              totalQuestao={simulado.totalQuestao}
              totalAlunos={simulado.totalAlunos}
            />
          ))}
        </div>
      </Page>
    </AdminLayout>
  );
}
