import { Page } from "../../../components/styles/questao";
import { ListUserCard } from "../../../components/ListUserCard";
import { graphql } from "@/gql";
import { useQuery } from "urql";
import AdminLayout from "@/components/adminLayout";

const usuariosQuerys = graphql(/* GraphQL */ `
  query Users {
    users {
      id
      photoUrl
      name
      email
      role
    }
  }
`);

export default function Admin() {
  const [result] = useQuery({ query: usuariosQuerys });

  const { data: users } = result;

  return (
    <AdminLayout page="userList">
      <Page className="w-[400px] xl:w-[750px]">
        <header>
          <h1>Lista de usuários</h1>
          <p>Tenha controle dos seus usuários</p>
        </header>
        {users?.users.length != undefined ? (
          <div className="mt-7 w-[350px] xl:w-[750px] p-4">
            {users?.users.map((user) => (
              <ListUserCard
                key={user.id}
                id={user.id}
                image={user.photoUrl}
                name={user.name}
                email={user.email}
                role={user.role.toLowerCase()}
              />
            ))}
          </div>
        ) : (
          <div>
            <h1>Carregando...</h1>
          </div>
        )}
      </Page>
    </AdminLayout>
  );
}
