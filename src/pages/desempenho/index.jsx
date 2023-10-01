import Layout from "@/components/layout";
import { ExamCard } from "@/components/ExamCard";
import { useState } from "react";

import { AiOutlineCheck, AiOutlineQuestionCircle } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { useModal } from "@/components/Modal";

export default function Desempenho() {
  const [showModalComment] = useModal(<ModalComment />);
  const [viewSimulados, setViewSimulados] = useState(true);
  const [comment, setComment] = useState("");
  const simuladosTeste = [
    { name: "simulado", totalQuestions: 12 },
    { name: "simulado", totalQuestions: 12 },
    { name: "simulado", totalQuestions: 12 },
    { name: "simulado", totalQuestions: 12 },
    { name: "simulado", totalQuestions: 12 },
    { name: "simulado", totalQuestions: 12 },
    { name: "simulado", totalQuestions: 12 },
    { name: "simulado", totalQuestions: 12 },
    { name: "simulado", totalQuestions: 12 },
    { name: "simulado", totalQuestions: 12 },
  ];
  const analisesTeste = [
    {
      name: "simulado",
      totalQuestions: 12,
      totalCorretas: 6,
      comentario: "lorem ipslum",
    },
    {
      name: "simulado",
      totalQuestions: 12,
      totalCorretas: 6,
      comentario: "lorem ipslum",
    },
    {
      name: "simulado",
      totalQuestions: 12,
      totalCorretas: 6,
      comentario: "lorem ipslum",
    },
  ];

  function AnaliseCard({ name, totalQuestions, totalCorretas, comentario }) {
    return (
      <div className="flex items-center justify-between p-4 font-bold border text-md rounded-xl bg-base-200 border-primary">
        <div>{name}</div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <AiOutlineQuestionCircle className="text-primary" />
            {totalQuestions}
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineCheck className="text-primary" />
            {totalCorretas}
          </span>
        </div>
        <button
          className="text-2xl duration-200 text-secondary hover:text-primary"
          onClick={() => {
            setComment(comentario);
            showModalComment();
          }}
        >
          <BiCommentDetail />
        </button>
      </div>
    );
  }

  function ModalComment() {
    return (
      <>
        <h1>Considerações da Vem</h1>
        <p>{comment}</p>
      </>
    );
  }
  return (
    <Layout page="desempenho">
      <div className="flex flex-col items-center w-full h-full gap-3 p-2 md:p-5">
        <h1 className="text-3xl font-bold">Diagnóstico de desempenho</h1>
        <div className="w-full p-2 border-2 rounded h-[500px] bg-base-200 border-primary overflow-hidden">
          <div className="flex items-center justify-start w-full gap-2 mb-3">
            <button
              onClick={() => setViewSimulados(true)}
              className={`text-xl font-semibold duration-300 ${
                viewSimulados
                  ? "text-primary border-b-2 border-b-primary"
                  : "text-secondary "
              }`}
            >
              Simulados Abertos
            </button>
            <button
              onClick={() => setViewSimulados(false)}
              className={`text-xl font-semibold duration-300 ${
                !viewSimulados
                  ? "text-primary border-b-2 border-b-primary"
                  : "text-secondary "
              }`}
            >
              Análises
            </button>
          </div>
          {viewSimulados ? (
            <div className="flex flex-col w-full h-full overflow-auto">
              {simuladosTeste.map((simulado, id) => (
                <ExamCard
                  key={id}
                  id={id}
                  name={simulado.name}
                  questions={simulado.totalQuestions}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col w-full h-full gap-3 overflow-auto">
              {analisesTeste.map((analise, id) => (
                <AnaliseCard
                  key={id}
                  name={analise.name}
                  totalQuestions={analise.totalQuestions}
                  totalCorretas={analise.totalCorretas}
                  comentario={analise.comentario}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
