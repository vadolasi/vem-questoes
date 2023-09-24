import { Page } from "../../../components/styles/questao";
import { graphql } from "@/gql";
import { useQuery } from "urql";
import { AiOutlineEye } from "react-icons/ai";
import AdminLayout from "@/components/adminLayout";
import { useModal } from "@/components/Modal";

interface ListNotfCardInterface {
  id: number;
  title: string;
  content: string;
}

function ViewsMenu() {
  return (
    <>
      <h1>Visualizado por:</h1>
      <p>User 1</p>
      <p>User 2</p>
      <p>User 3</p>
    </>
  );
}

export default function ListNotificacoes() {
  const notificacoesExample = [
    { id: 1, title: "notificacao1", content: "exemplo" },
    { id: 1, title: "notificacao2", content: "exemplo" },
    { id: 1, title: "notificacao3", content: "exemplo" },
  ];
  const [modalView] = useModal(<ViewsMenu />);

  function ListNotfCard({ id, title, content }: ListNotfCardInterface) {
    return (
      <div className="flex flex-row items-center justify-between border-b-2 border-b-gray-500">
        <div>
          <div className="flex items-center gap-1">
            <p>{id}</p>
            <p>{title}</p>
          </div>
          <p>{content}</p>
        </div>
        <button className="text-accent" onClick={modalView}>
          <AiOutlineEye />
        </button>
      </div>
    );
  }
  return (
    <AdminLayout page="listNotificacoes">
      <Page className="w-[400px] xl:w-[750px]">
        <header>
          <h1>Lista de Notificações</h1>
          <p>Tenha controle de quem lê as notificações</p>
        </header>

        <div className="flex flex-col gap-1">
          {notificacoesExample.map((not) => (
            <ListNotfCard
              key={not.id}
              id={not.id}
              title={not.title}
              content={not.content}
            />
          ))}
        </div>
      </Page>
    </AdminLayout>
  );
}
