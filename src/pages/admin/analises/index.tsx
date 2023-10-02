import AdminLayout from "@/components/adminLayout";
import { Page } from "@/components/styles/questao";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { useState } from "react";
import { Button } from "@/components/Button";
export default function Analises() {
  const [area, setArea] = useState<string>("");
  const [questao, setQuestoes] = useState("");
  const [aluno, setAlunos] = useState("");
  const [questoesAplicadas, setQuestoesAplicadas] = useState([]);
  const [alunosSelecionados, setAlunosSelecionados] = useState([]);
  const areas = [
    { value: 0, option: "dsfasdfs" },
    { value: 1, option: "dsfasdfs" },
    { value: 2, option: "dsfasdfs" },
  ];
  const questoes = [
    { value: 0, option: "questao1" },
    { value: 1, option: "questao2" },
    { value: 2, option: "questao3" },
  ];
  const alunos = [
    { value: 0, option: "maria" },
    { value: 1, option: "joaozinho" },
    { value: 2, option: "claudio" },
  ];

  return (
    <AdminLayout page="análises">
      <Page className="w-[400px] xl:w-[750px]">
        <header>
          <h1>Analise dos simulados</h1>
          <p>Analise e crie os simulados dos usuários</p>
        </header>

        <div className="flex flex-col w-full h-[500px] p-3 bg-base-200 border-2 border-primary rounded">
          <Input
            text="Título do simulado"
            placeholder="Ex: fisioterapia clínica"
            className="bg-base-200"
          />
          <Select
            label="Areas"
            title="Areas"
            setValue={(options: any) => setArea(options)}
            options={areas}
            value={area}
          />
          <div className="flex items-end gap-1">
            <Select
              label="Questoes"
              title="Questos"
              setValue={(options: any) => setQuestoes(options)}
              options={questoes}
              value={questao}
            />

            <button className="p-2 text-white duration-300 rounded bg-primary hover:brightness-90">
              Aplicar
            </button>
          </div>
          <div className="flex items-end gap-1">
            <Select
              label="Alunos"
              title="alunos"
              setValue={(options: any) => setAlunos(options)}
              options={alunos}
              value={aluno}
            />

            <button className="p-2 text-white duration-300 rounded bg-primary hover:brightness-90">
              Aplicar
            </button>
          </div>

          <div className="flex flex-col items-start gap-1 my-3 text-lg font-bold">
            <h1 className="p-1 border-b border-black/30">Área selecionada:</h1>
            <h1 className="p-1 border-b border-black/30">
              Questões aplicadas:
            </h1>
            <h1 className="p-1 border-b border-black/30">
              Alunos adicionados:
            </h1>
          </div>
          <Button>Criar simulado</Button>
        </div>
      </Page>
    </AdminLayout>
  );
}
